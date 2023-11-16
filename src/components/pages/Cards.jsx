import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Box, Chip } from "@mui/material";

export const Cards = ({ data }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Set the delay in milliseconds (2 seconds in this case)

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                {isLoading ? (
                    <>
                        <Box>
                            <Stack direction={"column"} spacing={2}>
                                <Skeleton
                                    variant="rounded"
                                    sx={{ borderRadius: 4 }}
                                    width={345}
                                    height={150}
                                />
                                <Skeleton />
                                <Skeleton width="60%" />
                            </Stack>
                        </Box>
                    </>
                ) : (
                    <Card
                        sx={{
                            maxWidth: 345,
                            borderRadius: 4,
                            minWidth: 345,
                            minHeight: 400,
                        }}
                    >
                        <CardMedia
                            sx={{
                                height: 140,
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            image="https://img.freepik.com/free-photo/conference-room-with-desk-wall-windows-that-says-office_1340-37385.jpg?t=st=1700066607~exp=1700070207~hmac=a85f9b15fd3abb4db4e9fec3ef1227a60478c6edb42d3a9b834f684c13b51223&w=1060"
                        >
                            <Stack direction={"column"} spacing={2}>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        color: "white",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        padding: "8px",
                                        textAlign: "center",
                                        borderRadius: 2,
                                    }}
                                >
                                    {data.cabin}
                                </Typography>
                                <Box
                                    sx={{
                                        color: "white",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        padding: "1px",
                                        textAlign: "center",
                                        borderRadius: 2,
                                    }}
                                >
                                    {data.status}
                                </Box>
                            </Stack>
                        </CardMedia>

                        <CardContent>
                            <Typography variant="h5" component="div">
                                {data.bookingPerson}
                            </Typography>
                            <Typography gutterBottom variant="h6" fontSize={14}>
                                {data.department}
                            </Typography>
                            <Chip
                                sx={{ fontWeight: "bolder" }}
                                size="small"
                                variant="filled"
                                color="primary"
                                label={`Date :-${data.date} `}
                            />
                            <Stack direction={"row"} spacing={2} paddingTop={1}>
                                <Chip
                                    sx={{ fontWeight: "bolder" }}
                                    size="small"
                                    variant="outlined"
                                    color="primary"
                                    label={`From :-${data.startTime} `}
                                />
                                <Chip
                                    sx={{ fontWeight: "bolder" }}
                                    size="small"
                                    variant="outlined"
                                    color="primary"
                                    label={`To :-${data.endTime} `}
                                />
                            </Stack>

                            <Typography
                                sx={{ pt: 2 }}
                                variant="body2"
                                color="text.secondary"
                            >
                                {data.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                )}
            </Box>
        </>
    );
};
