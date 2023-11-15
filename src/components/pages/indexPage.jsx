import { Box, Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import ViewBookings from "./ViewBookings";
import BookingForm from "./BookingForm";
import LogInPage from "./LogInpage";
import { useSnackbar } from "notistack";
import { Login } from "./Login";

export default function IndexPage() {
    const { enqueueSnackbar } = useSnackbar();
    const [data, setData] = React.useState("ViewBooking");
    const [authData, setAuthData] = React.useState("");
    const [authDataCheck, setAuthDataCheck] = React.useState({
        name: "Athul",
        password: "12345",
    });

    console.log("authData", authData);
    return (
        <div>
            {authData.name === authDataCheck.name &&
            authData.password === authDataCheck.password ? (
                <>
                    <Box>
                        <Box sx={{ padding: 3 }}>
                            <img
                                height={50}
                                width={200}
                                src="https://www.teaminterval.ae/wp-content/uploads/2022/03/interval-logo.png"
                            />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                </>
            ) : (
                // <LogInPage
                //     setAuthData={setAuthData}
                //     authDataCheck={authDataCheck}
                // />
                <Login
                    setAuthData={setAuthData}
                    authDataCheck={authDataCheck}
                />
            )}
        </div>
    );
}
