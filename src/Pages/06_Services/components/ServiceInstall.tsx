import React from "react";
//MUI
import { Box, Typography, Grid, styled, Paper, Button } from "@mui/material";
//React-Router-Dom
import { Link } from "react-router-dom";
//Style
import install from "../../../Assets/stock/install.jpg";
import theme from "../../../Styles/theme";

const flexCenterSX = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  my:7
};

const textBoxSX = {
  maxWidth: "1200px",
  width: { xs: "90%", lg: "100%" },
  display: "flex",
  flexDirection: "column",
};

const familyPictureSX = {
  backgroundImage: `url(${install})`,
  height: { sm: "400px", xs: "300px" },
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

const SecondTitle = styled(Typography)`
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 15px;
`;
const BlueBoldText = styled(Typography)`
  font-size: 25px;
  font-weight: bold;
  color: ${theme.palette.secondary.main};
`;
const paperSX = {
  height: "250px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  my: 2,
};


const ServiceInstall = () => {
  return (
    <Box sx={{ ...flexCenterSX }}>
      <Box sx={textBoxSX}>
        <Typography variant="h4" fontWeight={"bold"} py={2}>
          Install, Replace, or Retrofit - We have your back
        </Typography>
        <RepeatedText variant="h6">
          Whether it's a Rooftop cooling/heating Unit (RTU), Walk-In Freezer, or a Milk Tank. Cam Air has been professionally installing/servicing equipment like this for over 30 Years. We are experts the experts you need to have your equipment installed properly.  
        </RepeatedText>
        <RepeatedText variant="h6">
        Once a system is set up incorrectly, it’s only a matter of time before inventory is lost, maintenance costs are running wild, and energy bills are out of control. It can also be extremely expensive to rectify the issue. We make sure this will never happen when we professionally and efficiently carry out the installation, replacement, or retrofit.
        </RepeatedText>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={5.5}>
            <SecondTitle variant="h5">
            Personal approach to our client needs
            </SecondTitle>
            <RepeatedText variant="h6">
         Cam Air will make sure you get the right equipment. We will come on site and figure out exactly what is required to bring your ideas to life. We have the experience and knowledge to properly design, and install a large variety of equipment. We also work closely with our suppliers to make sure you get the best deal we can give you. 
        </RepeatedText>
        <RepeatedText variant="h6">
        We can also work with you about payment plans. If you are ready for an upgrade or new installation but cannot afford it right now, please call us and we can organize a payment plan that accommodates you. 
        </RepeatedText>
          </Grid>
          <Grid item xs={0} md={1} />
          <Grid item xs={12} md={5.5}>
            <Paper elevation={4} sx={familyPictureSX} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ServiceInstall;
