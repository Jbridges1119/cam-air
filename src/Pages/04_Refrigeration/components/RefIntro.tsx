import React from "react";
//MUI
import { Box, Typography, Grid, styled } from "@mui/material";
//React-Router-Dom
import { Link } from "react-router-dom";
//Style
import serviceRef from "../../../Assets/stock/serviceRef.jpg";

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
  backgroundImage: `url(${serviceRef})`,
  height: { sm: "500px", xs: "300px" },
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
  "Reciprocating, multi-stage, centrifugal compression systems",
  "Cold storage facilities",
  "Freon system leaks",
  "Chilled water and glycol systems",
  "Walk-in Coolers/Freezers",
  "Upright Coolers/Freezers",
  "Ice Machines",
  "Glycol Beer Coolers",
  "Associated digital control systems",
  "Monitoring systems",
  "Hydro cooling & vacuum cooling",
  "Bar Coolers",
  "Dipping Cabinets",
  "Milk Tanks",
];

const RefIntro = () => {
  return (
    <Box sx={{ ...flexCenterSX }}>
      <Box sx={textBoxSX}>
        <Typography variant="h4" fontWeight={"bold"} py={2}>
          We design, build, service and maintain industrial and commercial
          refrigeration systems.
        </Typography>
        <RepeatedText variant="h6">
          For <Link to={"/about"}>over 30 years</Link> Cam Air has worked with
          our clients to design, build and service their industrial and
          commercial refrigeration systems.
        </RepeatedText>
        <RepeatedText variant="h6">
          Our clients trust us to understand their needs and design solutions
          that meet and exceed their expectations.
        </RepeatedText>
        <RepeatedText variant="h6">
          Regardless of the size, type or age of your refrigeration system, Cam
          Air‘s certified technicians have the knowledge and experience to&nbsp;
          <Link to={"/services"}>
            service and maintain your commercial refrigeration system.
          </Link>
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
              We can help with your commercial refrigeration service:
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
  );
};

export default RefIntro;
