import React from "react";
//MUI
import { Box } from "@mui/material";
//Components
import HeatingHeader from "./components/HeatingHeader";
import HeatingIntro from "./components/HeatingIntro";
import HeatingBanner from "./components/HeatingBanner";
import HeatingSupport from "./components/HeatingSupport";

const BoxSX = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const Heating = () => {
  return (
    <Box sx={BoxSX}>
      <HeatingHeader />
      <HeatingIntro />
      <HeatingBanner />
      <HeatingSupport />
    </Box>
  );
};

export default Heating;
