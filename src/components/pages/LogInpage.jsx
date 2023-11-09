import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { useSnackbar } from "notistack";

export default function LoginPage({ setAuthData, authDataCheck }) {
    const { enqueueSnackbar } = useSnackbar();
    const [data, setData] = React.useState({
        name: "",
        password: "",
    });

    const handleClear = () => {
        const updatedData = {
            ...data,
            name: "",
            password: "",
        };
        setData(updatedData);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        setAuthData(data);
        if (
            data.name === authDataCheck.name &&
            data.password === authDataCheck.password
        ) {
            enqueueSnackbar("LogIn Successfully....", {
                variant: "success",
            });
        } else if (data.name != "" && data.password != "") {
            enqueueSnackbar("Invalid credentials...!", {
                variant: "error",
            });
        }
    };
    return (
        <div>
            <Box>
                <Paper
                    elevation={0}
                    sx={{ borderRadius: 5, padding: 7, width: "100%" }}
                >
                    <Box sx={{ display: "flex" }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bolder",

                                fontFamily: "monospace",
                            }}
                        >
                            Login
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bolder",
                                color: "gray",
                                fontFamily: "Public Sans, sans-serif",
                                opacity: 0.8,
                            }}
                        >
                            Sign in to Cabin booking system
                        </Typography>
                    </Box>
                    <form>
                        <Box marginTop={4}>
                            <Stack direction={"column"} spacing={2}>
                                <TextField
                                    label="name"
                                    placeholder="Enter your name "
                                    fullWidth
                                    required
                                    value={data.name}
                                    onChange={(e) => {
                                        const updatedData = {
                                            ...data,
                                            name: e.target.value,
                                        };
                                        setData(updatedData);
                                    }}
                                />
                                <TextField
                                    label="Password"
                                    placeholder="enter your password"
                                    fullWidth
                                    required
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => {
                                        const updatedData = {
                                            ...data,
                                            password: e.target.value,
                                        };
                                        setData(updatedData);
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    <Stack direction={"row"} spacing={2}>
                                        <Button
                                            onClick={handleClear}
                                            sx={{ borderRadius: 10 }}
                                            variant="outlined"
                                        >
                                            Clear
                                        </Button>
                                        <Button
                                            type="submit"
                                            sx={{ borderRadius: 10 }}
                                            variant="contained"
                                            onClick={handleLogin}
                                        >
                                            LogIn
                                        </Button>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Box>
                    </form>
                </Paper>
            </Box>
        </div>
    );
}
