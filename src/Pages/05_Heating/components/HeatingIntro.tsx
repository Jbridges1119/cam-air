import React from "react";
//MUI
import { Box, Typography, Grid, styled } from "@mui/material";
//React-Router-Dom
import { Link } from "react-router-dom";
//Style
import heating from "../../../Assets/stock/heating.jpg";

const flexCenterSX = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  mt: 6,
};

const textBoxSX = {
  maxWidth: "1200px",
  width: { xs: "90%", lg: "100%" },
  display: "flex",
  flexDirection: "column",
};

const familyPictureSX = {
  backgroundImage: `url(${heating})`,
  height: { sm: "475px", xs: "300px" },
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  my: 2,
};

const RepeatedText = styled(Typography)`
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: lighter;
`;

const refServiceList = [
  "Commercial Rooftop Units (RTU)",
  "Ductless Split Units",
  "Make-Up-Airs",
  "Exhaust Fans",
  "Unit Heaters",
  "Air handling units",
  "Control systems",
  "Mobile AC Units",
  "Geothermal systems",
  "Heat pumps",
  "Heat/energy recovery systems",
  "VRF Systems",
 
];

const HeatingIntro = () => {
  return (
    <Box sx={{ ...flexCenterSX }}>
    <Box sx={textBoxSX}>
      <Typography variant="h4" fontWeight={"bold"} py={2}>
        We design, build, service and maintain industrial and commercial
        refrigeration systems.
      </Typography>
      <RepeatedText variant="h6">
      At Cam Air, our seasoned repair professionals can handle all types of heating services, including repairs, maintenance and safety checks and tune-ups, fixing broken and noisy units, and installing new replacement systems. We can expertly service, repair or install a wide range of climate control systems in your home, including:
      </RepeatedText>
      <RepeatedText variant="h6">
      We’ve built a reputation in Lethbridge and throughout Southern Alberta for quality work, competitive pricing, and customer service that exceeds expectations. When you need reliable heating system maintenance, repairs or installations, <Link to={"/contact"}>contact us.</Link>
      </RepeatedText>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={5.5}>
          <Box sx={familyPictureSX} />
        </Grid>
        <Grid item xs={0} md={1} />
        <Grid item xs={12} md={5.5}>
          <Typography variant="h5" fontWeight={"bold"} pt={3} pb={2}>
            We install and service:
          </Typography>
          <Typography variant="h6" fontWeight={"lighter"} mb={6}>
            <ul>
              {refServiceList.map((item: string, i: number) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Box>
  )
}

export default HeatingIntro