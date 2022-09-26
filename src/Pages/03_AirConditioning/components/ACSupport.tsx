import React from "react";
//MUI
import { Box, Grid, Typography } from "@mui/material";
//Style
import acBuilding from "../../../Assets/stock/acBuilding.jpg";
import { Link } from "react-router-dom";

const flexCenterSX = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
};

const familyPictureSX = {
  backgroundImage: `url(${acBuilding})`,
  height: "450px",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "flex-end",
};

const frameBoxSX = {
  maxWidth: "1200px",
  width: { xs: "90%", lg: "100%" },
  display: "flex",
  flexDirection: "column",
};
const acServiceList = [
  "Commercial Rooftop Units (RTU)",
  "Ductless Split Units",
  "Make-Up-Airs",
  "Exhaust Fans",
  "Cooling towers",
  "Split AC Systems",
  "Mobile AC Units",
  "Geothermal systems",
  "Heat pumps",
  "Swamp Cooler",
  "VRF Systems",
  "Air handling units",
];

const ACSupport = () => {
  return (
    <Box sx={{ ...flexCenterSX, mt: 6 }}>
      <Box sx={frameBoxSX}>
        <Typography variant="h4" fontWeight={"bold"} py={2}>
          Problems with your commercial AC system?
        </Typography>
        <Typography variant="h6" fontWeight={"lighter"} mb={4}>
          Downtime is not only uncomfortable, it’s costly. Our{" "}
          <Link to="/contact">24/7/365 emergency service</Link> is always
          standing by.
          <br />
          <br />
          Many people only consider temperature in terms of comfort, but it also
          directly affects productivity. If your temperature is outside the
          optimal range of 20–26°C (68–79°F), for every 0.5°C (1°F) away from
          comfort, productivity decreases by 2%. So, for every degree away from
          comfort, if you take the average Canadian hourly wage, then a 2% drop
          in productivity can cost a business $4,200/year/person.
          <br />
          <br />
          We offer commercial air conditioning products and services in southern
          Alberta and our service staff are familiar with all makes and models
          to accommodate your company’s needs quickly and efficiently. Contact
          us today to discuss available HVAC services in your area.
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb={10}
        >
          <Grid item sm={5.5} xs={12}>
            <Box sx={familyPictureSX} />
          </Grid>
          <Grid item sm={1} xs={0} />
          <Grid item sm={5.5} xs={12}>
            <Typography variant="h4" fontWeight={"bold"} mt={3} mb={2}>
              We install and service:
            </Typography>
            <Typography variant="h6" fontWeight={"lighter"} >
              <ul>
                {acServiceList.map((item: string, i: number) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ACSupport;
