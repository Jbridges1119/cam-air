import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import tools from "../../../Assests/stock/tools.jpg";
const ServiceBanner = () => {
  return (
    <Box
      sx={{
        background: "#002685",
        height: "500px",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={0} md={6}>
          <Box
            sx={{
              backgroundImage: `url(${tools})`,
              height: "500px",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                clipPath: `polygon(0 0, 100% 0%, 100% 100%, 100% 100%)`,
                height: "500px",
                width: "20%",
                background: "#002685",
              }}
            ></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "500px",
              width: "100%",
            }}
          >
            <Stack spacing={2} p={4} maxWidth={'600px'}>
              <Typography variant="h6"sx={{color:"white", fontWeight:'lighter'}}>Your Preventative Maintenance Partner</Typography>
              <Typography variant="h6"sx={{color:"white", fontWeight:'bold'}}>Forget downtime. We’re available around the clock, 365 days a year, to keep your business running smoothly.</Typography>
              <Typography variant="h6"sx={{color:"white",fontWeight:'lighter' }}>Whether it’s an emergency repair or general service and maintenance Gateway’s highly trained team of certified HVAC, refrigeration, plumbing and electrical tradespeople are ready to get the job done right.</Typography>
              <Typography variant="h6"sx={{color:"white",fontWeight:'lighter' }}><Button>Learn more about our maintenance services</Button></Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceBanner;
