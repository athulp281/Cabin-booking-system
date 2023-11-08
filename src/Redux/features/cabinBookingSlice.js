import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiRequest from "../request";
import { formatDataForDataTable } from "../../components/formatData";

const initialState = {
    loading: false,
    data: [],
};

export const getBookeddata = createAsyncThunk(
    "bookCabin/getBookeddata",
    async () => {
        const res = await apiRequest({
            url: "getAllBookings",
            method: "get",
        });
        console.log("data", res);
        return res;
    }
);
export const addBooking = createAsyncThunk(
    "bookCabin/addBooking",
    async (data) => {
        console.log("data-=-=-=-", data);
        const res = await apiRequest({
            url: "createBooking",
            method: "post",
            data: data,
        });
        console.log("data", res);
        return res;
    }
);

// console.log(getBookeddata.res);

const bookCabinSlice = createSlice({
    name: "bookCabin",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBookeddata.pending, (state, action) => {
            return {
                ...state,
                loading: true,
            };
        });
        builder.addCase(getBookeddata.fulfilled, (state, action) => {
            const data = formatDataForDataTable(action.payload.allBooking);

            return {
                ...state,
                data: data,
                loading: false,
            };
        });
        builder.addCase(addBooking.pending, (state, action) => {
            return {
                ...state,
                loading: true,
            };
        });
        builder.addCase(addBooking.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
            };
        });
    },
});

export default bookCabinSlice.reducer;
