import { Chip } from "@mui/material";
import React from "react";

export const StatusCheck = ({ params }) => {
    // console.log("data", params);

    const targetDate = new Date(`${params.date}`);
    const startTime = new Date(`${params.date} ${params.startTime}`);
    const endTime = new Date(`${params.date} ${params.endTime}`);

    // Get the current date and time
    const currentDate = new Date();

    // Compare the target date and time with the current date and time
    if (targetDate < currentDate) {
        return (
            <Chip
                variant="filled"
                size="small"
                label="Not Started"
                color="primary"
            />
        );
        console.log("The target date is before the current date and time.");
    } else if (targetDate.getTime() === currentDate.getTime()) {
        return (
            <Chip
                variant="filled"
                size="small"
                label="on going..."
                color="primary"
            />
        );
        console.log(
            "The target date is the same as the current date and time."
        );
    } else {
        if (targetDate <= endTime) {
            return (
                <Chip
                    variant="filled"
                    size="small"
                    label="on going..."
                    color="success"
                />
            );
            console.log(
                "The target date and time is within the specified range."
            );
        } else {
            return (
                <Chip
                    variant="filled"
                    size="small"
                    label="Expired"
                    color="error"
                />
            );
            console.log(
                "The target date and time is after the current date and time."
            );
        }
    }
};
