import { Box, Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import ViewBookings from "./ViewBookings";
import BookingForm from "./BookingForm";
import LogInPage from "./LoginPage";
import LoginPage from "./LoginPage";

export default function IndexPage() {
    const [data, setData] = React.useState("ViewBooking");
    const [authData, setAuthData] = React.useState("");
    const [authDataCheck, setAuthDataCheck] = React.useState("");

    useEffect(() => {
        setAuthDataCheck({
            name: "Athul",
            password: "12345",
        });
    }, []);

    console.log("authData", authData);
    return (
        <div>
            {authData.name === authDataCheck.name &&
            authData.password === authDataCheck.password ? (
                <>
                    <Box>
                        <Box sx={{ padding: 5 }}>
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
                <LoginPage setAuthData={setAuthData} />
            )}
        </div>
    );
}
