import React from "react";
//MUI
import {Box , Typography } from "@mui/material";
//Components
import LocationCard from './LocationCard'
const boxContainSX = {
  maxWidth: "1200px",
  width: { xs: "90%", lg: "100%" },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const Location = () => {
  return (
    <Box sx={boxContainSX}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", pt: 4, pb: 2 }}
      >
        Our team is ready to connect with you!
      </Typography>
      <LocationCard/>
    </Box>
  );
};

export default Location;
