import React from "react";
//MUI
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../../Styles/theme";

const outerBoxSX = {
  background: theme.palette.secondary.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  py: 4,
  mb: 5,
};
const frameBoxSX = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  maxWidth: "1200px",
};
const contactButtonSX = {
  m: 1.5,
  fontSize: { sm: "20px", xs: "20px" },
  py: 1.5,
  border: "2px solid #1976d2",
  "&:hover": {
    background: "none",
  },
};
const textSX = {
  m: 1.5,
  color: "white",
  textAlign: { xs: "center", sm: "left" },
};
const Banner = () => {
  return (
    <Paper elevation={4} sx={outerBoxSX}>
      <Box sx={frameBoxSX}>
        <Typography variant="h4" sx={textSX}>
          Contact our expert team today for a FREE no-obligation consultation
        </Typography>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={contactButtonSX}>
            Contact Us Now
          </Button>
        </Link>
      </Box>
    </Paper>
  );
};

export default Banner;
