import React from "react";
//MUI
import {Box ,Typography } from "@mui/material";
//Style
import theme from "../../../Styles/theme";

const boxSX = {
  backgroundColor: theme.palette.secondary.main,
  width: "100%",
  mt: "45px",
  display: "flex",
  justifyContent: "center",
}
const typoSX = {
  py: 8,
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  maxWidth: { xs: "90%", md: "700px" },
}

const ContactHeader = () => {
  return (
    <Box
        sx={boxSX}
      >
        <Typography
          variant="h2"
          sx={typoSX}
        >
          Contact Cam Air Refrigeration and Heating
        </Typography>
      </Box>
  )
}

export default ContactHeader