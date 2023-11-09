import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import LoginPage from "./LogInpage";
import cabin from "../../assets/images/cabin.jpg";

export const Login = ({ authDataCheck, setAuthData }) => {
    return (
        <div>
            <Box sx={{ marginTop: 5 }}>
                <Stack direction={"row"} spacing={2}>
                    <Paper
                        elevation={2}
                        sx={{ width: "65%", height: "90vh", borderRadius: 5 }}
                    >
                        <Box sx={{ padding: 5 }}>
                            <img
                                height={50}
                                width={200}
                                src="https://www.teaminterval.ae/wp-content/uploads/2022/03/interval-logo.png"
                            />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: "bolder",
                                    opacity: 0.8,
                                    fontFamily: "Public Sans, sans-serif",
                                }}
                            >
                                Hi, Welcome back...
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <img height={450} width={500} src={cabin} />
                        </Box>
                    </Paper>

                    <Box paddingTop={6}>
                        <LoginPage
                            authDataCheck={authDataCheck}
                            setAuthData={setAuthData}
                        />
                    </Box>
                </Stack>
            </Box>
        </div>
    );
};
