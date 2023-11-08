import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";

export default function LoginPage({ setAuthData }) {
    const [data, setData] = React.useState({
        name: "",
        password: "",
    });

    const handleLogin = () => {
        setAuthData(data);
    };
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Paper
                    elevation={3}
                    sx={{ width: "35%", borderRadius: 5, padding: 5 }}
                >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: "bolder",
                                fontSize: "40px",
                                fontFamily: "sans-serif",
                            }}
                        >
                            LOG IN
                        </Typography>
                    </Box>
                    <form>
                        <Box>
                            <Stack direction={"column"} spacing={2}>
                                <TextField
                                    label="name"
                                    placeholder="Enter your name "
                                    fullWidth
                                    required
                                    value={data.data}
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
