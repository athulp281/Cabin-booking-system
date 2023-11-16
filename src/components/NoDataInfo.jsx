import { Box } from "@mui/material";
import React from "react";
import noDataImg from "../assets/images/nodata.jpg";
import { motion } from "framer-motion";

export const NoDataInfo = () => {
    const containerVariants = {
        initial: { scale: 1 },
        animate: {
            scale: [1, 1.02, 1],
            transition: { duration: 2, repeat: Infinity },
        },
    };
    return (
        <div>
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        height={300}
                        width={300}
                        src={noDataImg}
                        alt="nodata"
                    />
                </Box>
            </motion.div>
        </div>
    );
};
