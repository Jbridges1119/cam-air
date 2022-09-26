import React from "react";
//MUI
import { Box, Grid, Paper, Typography } from "@mui/material";
//Style
import walkIn from "../../../Assets/stock/walkIn.jpg";

const flexCenterSX = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
};

const familyPictureSX = {
  backgroundImage: `url(${walkIn})`,
  height: "400px",
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

const RefSupport = () => {
  return (
    <Box sx={{ ...flexCenterSX, mt: 6 }}>
      <Box sx={frameBoxSX}>
        <Typography variant="h4" fontWeight={"bold"} py={2}>
          Need startup or shutdown support?
        </Typography>
        <Typography variant="h6" fontWeight={"lighter"} mb={4}>
          Here at Cam Air we provide our customers with seamless startups and
          shutdowns.
          <br />
          <br />
          We always strive for safety, reliability, and minimal downtime because
          we understand how improperly managed shutdowns and startups can impact
          businesses.
          <br />
          <br />
          That’s exactly why we pressure test all compressors before returning
          them to the field. We also generate a commissioning report when we
          restart the system, analyzing operating conditions, how the compressor
          is running, and assess against manufacturer specifications.
          <br />
          <br />
          Following your system startup, we arrange a maintenance schedule that
          works best for your specific needs. This ensures your equipment runs
          smoothly through all production quarters.
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb={10}
        >
          <Grid item sm={5.5} xs={12}>
            <Paper elevation={4} sx={familyPictureSX} />
          </Grid>
          <Grid item sm={1} xs={0} />
          <Grid item sm={5.5} xs={12}>
            <Typography variant="h4" fontWeight={"bold"} py={2}>
              It’s already built, so how do I maintain it?
            </Typography>
            <Typography variant="h6" fontWeight={"lighter"}>
              Downtime isn’t an option for successful, efficient businesses.
              You’ve invested in your equipment, so our preventative maintenance
              programs aim to help your equipment exceed its projected lifespan.
              Our team of licensed HVAC/R technicians service, repair, and
              maintain all makes and models—regardless of who installed it. When
              you work with us, you can also track work orders, on demand.{" "}
              <br />
              <br />
              Our commercial refrigeration technicians help ensure your
              equipment remains at peak performance. We’ve got you covered.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RefSupport;
