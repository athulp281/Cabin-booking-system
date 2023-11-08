import { configureStore } from "@reduxjs/toolkit";
import cabinBookingReducer from "./features/cabinBookingSlice";

export default configureStore({
    reducer: {
        cabin: cabinBookingReducer,
    },
});
