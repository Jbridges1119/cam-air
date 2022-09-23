import React from "react";
//MUI
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
//Components
import Banner from "./components/Banner";
import SocialsFooter from "./components/SocialsFooter";
import ContactUsFooter from "./components/ContactUsFooter";
import CompanyFooter from "./components/CompanyFooter";

const outerGridSX = {
  maxWidth: "1200px",
  direction: "row",
  justifyContent: { sm: "space-between", xs: "center" },
  alignItems: "flex-start",
};
const Footer = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Banner />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container sx={outerGridSX}>
          <Grid item md={3} sm={6} xs={10}>
            <ContactUsFooter />
          </Grid>
          <Grid item md={3} sm={6} xs={10}>
            <CompanyFooter />
          </Grid>
          <Grid item md={3} sm={6} xs={10}>
            <SocialsFooter />
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Button
        sx={{ all: "unset", cursor: "pointer" }}
        href="https://github.com/Jbridges1119/cam-air"
        target="_blank"
      >
        <Typography variant="body1" textAlign={"center"} p={1} color={"black"}>
          Designed and Built By Jeff Bridges
        </Typography>
      </Button>
    </Box>
  );
};

export default Footer;
