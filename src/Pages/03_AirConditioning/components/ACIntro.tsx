import React from "react";
//MUI
import { Box, Typography, Grid, styled } from "@mui/material";
//Style
import culture from "../../../Assets/stock/culture.jpg";

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
  backgroundImage: `url(${culture})`,
  height: { sm: "350px", xs: "300px" },
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  mb: 4,
};

const RepeatedText = styled(Typography)`
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: lighter;
`;

const ACIntro = () => {
  return (
    <Box sx={{ ...flexCenterSX }}>
      <Box sx={textBoxSX}>
        <Typography variant="h3" fontWeight={"bold"} py={2}>
          Your AC experts.
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={5.5}>
            <RepeatedText variant="h6">
              We’ve served commercial air conditioning customers across southern
              Alberta since 1992. Despite over 30 years of expertise in
              commercial HVAC applications, we continue to innovate and lead our
              industry.
            </RepeatedText>
            <RepeatedText variant="h6">
              For starters, by using better components and controls, our systems
              operate more efficiently. That means energy savings, longer
              component lifecycles, and more comfortable, consistent
              temperatures. Cam Air can also retrofitting or modify existing
              systems and that can help reduce your energy bills and carbon
              footprint.
            </RepeatedText>
          </Grid>
          <Grid item xs={0} md={1} />
          <Grid item xs={12} md={5.5}>
            <Box sx={familyPictureSX} />
          </Grid>
        </Grid>
        <Typography variant="h4" fontWeight={"bold"} py={3}>
          Navigating refrigerant options can be daunting.
        </Typography>
        <Typography variant="h6" fontWeight={"lighter"} mb={10}>
          Our goal is to keep it simple for you. For decades we’ve created
          systems that are cost-effective, energy-efficient, durable, and easily
          serviceable. We’re proficient with all refrigerants from Propane
          (R290) to R404A. We can even help with R22 (freon) retrofits if you’re
          ready to convert your equipment to a more sustainable and economically
          viable option. Most importantly, we’ll work with you to understand
          your needs and recommend options that work for you.
          <br />
          <br />
          Cam Air’s team of HVAC technicians and engineers achieve this control
          by mastering best practices and applying them to your commercial,
          industrial or institutional project.
        </Typography>
      </Box>
    </Box>
  );
};

export default ACIntro;
