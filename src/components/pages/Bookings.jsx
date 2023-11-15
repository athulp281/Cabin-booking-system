import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookeddata } from "../../Redux/features/cabinBookingSlice";
import { Cards } from "./Cards";

export const Bookings = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.cabin);
    useEffect(() => {
        dispatch(getBookeddata());
    }, []);
    return (
        <div>
            <Box
                sx={{
                    padding: 3,
                    margin: 3,
                }}
            >
                <Box padding={2}>
                    <Typography variant="h4" fontWeight={"bolder"}>
                        Bookings
                    </Typography>
                    <Divider
                        sx={{ borderBottomWidth: 3, borderStyle: "dashed" }}
                    />
                </Box>
                <Grid container spacing={2}>
                    {data.map((item) => {
                        return (
                            <Grid item xs={12} md={4} lg={3}>
                                <Cards data={item} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </div>
    );
};
