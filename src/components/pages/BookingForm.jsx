import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../../Redux/features/cabinBookingSlice";
import { useSnackbar } from "notistack";

export default function BookingForm() {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    // const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [fromTime, setFromTime] = React.useState(null);
    const [toTime, setToTime] = React.useState(null);
    const [data, setData] = React.useState({
        department: "",
        bookingPerson: "",
        startTime: "",
        cabin: "",
        endTime: "",
        date: "",
    });

    console.log(data);

    const handleChangeDepartment = (event) => {
        const updatedData = { ...data, department: event.target.value };
        setData(updatedData);
    };

    const handleChangeCabin = (event) => {
        const updatedData = { ...data, cabin: event.target.value };
        setData(updatedData);
    };

    const handleSubmit = () => {
        dispatch(addBooking(data)).then((res) => {
            console.log("res------", res);

            if (res.payload.message) {
                enqueueSnackbar(res.payload.message, {
                    variant: "success",
                });
            } else if (res.payload.error) {
                enqueueSnackbar(res.payload.error, {
                    variant: "error",
                });
            }
        });
    };
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
            <form>
                <Box sx={{ padding: 4 }}>
                    <Paper elevation={3} sx={{ padding: 4 }}>
                        <Stack direction={"column"} spacing={2}>
                            <Box>
                                <TextField
                                    label="Employee Name"
                                    placeholder="Enter Your Name"
                                    fullWidth
                                    variant="outlined"
                                    required
                                    value={data.bookingPerson}
                                    onChange={(event) => {
                                        const updatedData = {
                                            ...data,
                                            bookingPerson: event.target.value,
                                        };
                                        setData(updatedData);
                                    }}
                                />
                            </Box>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Department
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={data.bookingPerson}
                                        label="Department"
                                        onChange={handleChangeDepartment}
                                    >
                                        <MenuItem value={"HR DEPARTMENT"}>
                                            HR DEPARTMENT
                                        </MenuItem>
                                        <MenuItem
                                            value={"TECHNICAL DEPARTMENT"}
                                        >
                                            TECHNICAL DEPARTMENT
                                        </MenuItem>
                                        <MenuItem
                                            value={" MARKETING DEPARTMENT"}
                                        >
                                            MARKETING DEPARTMENT
                                        </MenuItem>
                                        <MenuItem
                                            value={" MARKETING DEPARTMENT"}
                                        >
                                            MARKETING DEPARTMENT
                                        </MenuItem>
                                        <MenuItem value={"CREATIVE DEPARTMENT"}>
                                            CREATIVE DEPARTMENT
                                        </MenuItem>
                                        <MenuItem
                                            value={
                                                " OPERATION GROUTH DEPARTMENT"
                                            }
                                        >
                                            OPERATION GROUTH DEPARTMENT
                                        </MenuItem>
                                        <MenuItem
                                            value={
                                                " CLIENT RELATION DEPARTMENT"
                                            }
                                        >
                                            CLIENT RELATION DEPARTMENT
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Cabin
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={data.cabin}
                                        label="Cabin"
                                        onChange={handleChangeCabin}
                                    >
                                        <MenuItem value={"GROUND FLOOR"}>
                                            GROUND FLOOR
                                        </MenuItem>
                                        <MenuItem value={"FIRST FLOOR"}>
                                            FIRST FLOOR
                                        </MenuItem>
                                        <MenuItem value={" SECOND FLOOR"}>
                                            SECOND FLOOR
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Basic example"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                        const updatedData = {
                                            ...data,
                                            date: dayjs(newValue).format(
                                                "DD/MM/YYYY"
                                            ),
                                        };
                                        setData(updatedData);
                                    }}
                                    renderInput={(params) => (
                                        <TextField fullWidth {...params} />
                                    )}
                                />
                            </LocalizationProvider>
                            <Stack
                                direction={"row"}
                                spacing={2}
                                sx={{ width: "100% " }}
                            >
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DemoContainer
                                        components={[
                                            "TimePicker",
                                            "TimePicker",
                                        ]}
                                    >
                                        <TimePicker
                                            label="From Time"
                                            value={fromTime}
                                            // sx={{ width: "50%" }}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                                const updatedData = {
                                                    ...data,
                                                    startTime:
                                                        dayjs(newValue).format(
                                                            "h:mm A"
                                                        ),
                                                };
                                                setData(updatedData);
                                            }}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DemoContainer
                                        components={[
                                            "TimePicker",
                                            "TimePicker",
                                        ]}
                                    >
                                        <TimePicker
                                            label="To Time"
                                            value={toTime}
                                            // sx={{ width: "50%" }}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                                const updatedData = {
                                                    ...data,
                                                    endTime:
                                                        dayjs(newValue).format(
                                                            "h:mm A"
                                                        ),
                                                };
                                                setData(updatedData);
                                            }}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Stack>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <Stack direction={"row"} spacing={2}>
                                    <Button variant="outlined">Clear</Button>
                                    <Button
                                        variant="contained"
                                        onClick={handleSubmit}
                                    >
                                        Save
                                    </Button>
                                </Stack>
                            </Box>
                        </Stack>
                    </Paper>
                </Box>
            </form>
        </motion.div>
    );
}
