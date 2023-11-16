import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookeddata } from "../../Redux/features/cabinBookingSlice";
import { Cards } from "./Cards";
import { NoDataInfo } from "../NoDataInfo";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import useResponsive from "../../hooks/UseResponsive";

export const Bookings = () => {
    const smUp = useResponsive("up", "sm");
    const mdUp = useResponsive("up", "md");
    const [value, setValue] = React.useState(dayjs());
    const [filteredData, setFilteredData] = React.useState();

    const dispatch = useDispatch();

    const { data } = useSelector((state) => state.cabin);

    useEffect(() => {
        dispatch(getBookeddata());
    }, []);
    useEffect(() => {
        setValue(dayjs());
    }, [data]);

    useEffect(() => {
        const date = value.format("DD/MM/YYYY");
        const filtered = data.filter((item) => item.date === date);
        setFilteredData(filtered);
    }, [value]);

    return (
        <div>
            <Box
                sx={{
                    padding: 2,
                    margin: 3,
                }}
            >
                <Box padding={2}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: smUp ? "space-between" : "",
                            flexDirection: smUp ? "" : "column",
                        }}
                    >
                        <Typography variant="h4" fontWeight={"bolder"}>
                            Bookings
                        </Typography>
                        <Box padding={1}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Date"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </LocalizationProvider>
                        </Box>
                    </Box>

                    <Divider
                        sx={{ borderBottomWidth: 3, borderStyle: "dashed" }}
                    />
                </Box>
                {filteredData == ![] ? (
                    <NoDataInfo />
                ) : (
                    <Grid container spacing={2}>
                        {filteredData?.map((item) => {
                            return (
                                <Grid item xs={12} md={6} lg={4}>
                                    <Cards data={item} />
                                </Grid>
                            );
                        })}
                    </Grid>
                )}
            </Box>
        </div>
    );
};
