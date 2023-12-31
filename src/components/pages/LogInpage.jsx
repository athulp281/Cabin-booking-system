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
import useResponsive from "../../hooks/UseResponsive";

export default function LoginPage({ setAuthData, authDataCheck }) {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
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
        if (data.name != "" && data.password != "") {
            if (
                data.name === authDataCheck.name &&
                data.password === authDataCheck.password
            ) {
                const myObject = data;
                localStorage.setItem("authData", JSON.stringify(myObject));
                enqueueSnackbar("LogIn Successfully....", {
                    variant: "success",
                });
            } else if (data.name != "" && data.password != "") {
                enqueueSnackbar("Invalid credentials...!", {
                    variant: "error",
                });
            }
        } else {
            enqueueSnackbar("Please fill all the fiels...!", {
                variant: "warning",
            });
        }
    };
    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Paper
                    elevation={0}
                    sx={{
                        borderRadius: 5,
                        padding: smUp ? 8 : 5,
                        width: "100%",
                    }}
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
                                    label="Name"
                                    placeholder="Enter your Name "
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
