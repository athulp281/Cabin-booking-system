import { Box, Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import ViewBookings from "./ViewBookings";
import BookingForm from "./BookingForm";
import LogInPage from "./LogInpage";
import { useSnackbar } from "notistack";
import { Login } from "./Login";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import useResponsive from "../../hooks/UseResponsive";

export default function IndexPage() {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    const { enqueueSnackbar } = useSnackbar();
    const [data, setData] = React.useState("ViewBooking");
    const [authData, setAuthData] = React.useState("");
    const [authDataCheck, setAuthDataCheck] = React.useState({
        name: "Athul",
        password: "12345",
    });

    const containerVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    };
    console.log("authData", authData);
    const handleLogout = () => {
        localStorage.removeItem("authData");
        setAuthData({ name: "", password: "" });
        enqueueSnackbar("Logout..", {
            variant: "error",
        });
    };

    const storedObject = JSON.parse(localStorage.getItem("authData"));
    return (
        <div>
            <Box>
                {storedObject?.name === authDataCheck.name &&
                storedObject?.password === authDataCheck.password ? (
                    <>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            transition={{ duration: 1 }}
                        >
                            <Box
                                sx={{
                                    position: "sticky",
                                    top: 0,
                                    zIndex: 1000,
                                    backgroundColor: "white",
                                    background: "rgba(255, 255, 255, 0.8)", // Adjust the alpha value for transparency
                                    backdropFilter: "blur(10px)", // Adjust the blur value for the glassmorphism effect
                                    padding: 1,
                                    borderRadius: 10,
                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Add a subtle shadow
                                }}
                            >
                                <Box
                                    sx={{
                                        padding: 1,
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <img
                                        height={50}
                                        width={200}
                                        src="https://www.teaminterval.ae/wp-content/uploads/2022/03/interval-logo.png"
                                    />
                                    <Button
                                        size={smUp ? "medium" : "small"}
                                        sx={{
                                            borderRadius: 4,
                                            backgroundColor: "#f7000038",
                                            color: "#d00000",
                                            fontWeight: "bolder",
                                        }}
                                        onClick={handleLogout}
                                    >
                                        <Icon
                                            icon="line-md:logout"
                                            width={smUp ? "22" : "15"}
                                            height={smUp ? "22" : "15"}
                                            rotate={2}
                                        />
                                        Logout
                                    </Button>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Stack direction={"row"} spacing={2}>
                                        <Box>
                                            <Button
                                                sx={{ borderRadius: 5 }}
                                                variant={
                                                    data == "BookingForm"
                                                        ? "contained"
                                                        : "outlined"
                                                }
                                                onClick={() => {
                                                    setData("BookingForm");
                                                }}
                                            >
                                                Book Cabin
                                            </Button>
                                        </Box>
                                        <Box>
                                            <Button
                                                sx={{ borderRadius: 5 }}
                                                variant={
                                                    data == "ViewBooking"
                                                        ? "contained"
                                                        : "outlined"
                                                }
                                                onClick={() => {
                                                    setData("ViewBooking");
                                                }}
                                            >
                                                View Bookings
                                            </Button>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Box>
                            {data === "ViewBooking" ? (
                                <Box>
                                    <ViewBookings />
                                </Box>
                            ) : (
                                <Box>
                                    <BookingForm />
                                </Box>
                            )}
                        </motion.div>
                    </>
                ) : (
                    <Login
                        setAuthData={setAuthData}
                        authDataCheck={authDataCheck}
                    />
                )}
            </Box>
        </div>
    );
}
