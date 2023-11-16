import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import LoginPage from "./LogInpage";
import cabin from "../../assets/images/cabin.jpg";
import useResponsive from "../../hooks/UseResponsive";
import { motion } from "framer-motion";

export const Login = ({ authDataCheck, setAuthData }) => {
    const variants = {
        hidden: { y: "-100%" },
        visible: { y: 0 },
    };
    const transition = { ease: "easeInOut", duration: 0.6 };
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    return (
        <div>
            <Box sx={{ marginTop: 5 }}>
                <Stack direction={"row"} spacing={2}>
                    <Paper
                        elevation={2}
                        sx={{
                            width: smUp ? "65%" : "100%",
                            height: "90vh",
                            borderRadius: 5,
                        }}
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
                        {!smUp ? null : (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <img height={450} width={500} src={cabin} />
                            </Box>
                        )}

                        {smUp ? null : (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                transition={transition}
                                // transition={{ ease: "easeOut", duration: 0.5 }}
                            >
                                <LoginPage
                                    authDataCheck={authDataCheck}
                                    setAuthData={setAuthData}
                                />
                            </motion.div>
                        )}
                    </Paper>
                    {!smUp ? null : (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            transition={transition}
                            // transition={{ ease: "easeOut", duration: 0.5 }}
                        >
                            <Box
                                paddingTop={10}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <LoginPage
                                    authDataCheck={authDataCheck}
                                    setAuthData={setAuthData}
                                />
                            </Box>
                        </motion.div>
                    )}
                </Stack>
            </Box>
        </div>
    );
};
