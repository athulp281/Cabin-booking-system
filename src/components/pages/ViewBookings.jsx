import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Chip, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { getBookeddata } from "../../Redux/features/cabinBookingSlice";
import { useDispatch, useSelector } from "react-redux";
import { StatusCheck } from "./StatusCheck";
import { Bookings } from "./Bookings";

export default function ViewBookings() {
    const { data } = useSelector((state) => state.cabin);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBookeddata());
    }, []);

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    const HEAD = [
        {
            field: "serialNumber",
            headerName: "slNo",
            width: 50,
        },
        {
            field: "bookingPerson",
            headerName: "bookingPerson",
            width: 150,
        },
        {
            field: "department",
            headerName: "department",
            width: 150,
        },
        {
            field: "date",
            headerName: "date",
            width: 150,
        },
        {
            field: "startTime",
            headerName: "fromTimeate",
            width: 150,
        },
        {
            field: "endTime",
            headerName: "toTime",
            width: 150,
        },
        {
            field: "status",
            headerName: "status",
            width: 150,
            renderCell: (params) => <StatusCheck params={params.row} />,
        },

        {
            field: "edit",
            headerName: "Edit",
            width: 150,
        },
        {
            field: "delete",
            headerName: "Delete",
            width: 150,
        },
    ];
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            <>
                <Box padding={1}>
                    {/* <Paper elevation={3}> */}
                    {/* <DataGrid
                            // loading={loading}
                            rows={data}
                            columns={HEAD}
                            getRowId={(row) => row.serialNumber}
                            // pageSize={gridSize}
                            // onPageSizeChange={(newGridSize) =>
                            //     setGridSize(newGridSize)
                            // }
                            rowsPerPageOptions={[5, 10, 25, 50]}
                            autoHeight
                        />
                    </Paper> */}
                </Box>
                <Bookings />
            </>
        </motion.div>
    );
}
