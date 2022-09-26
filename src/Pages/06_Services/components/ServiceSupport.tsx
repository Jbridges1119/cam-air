import React from "react";
//MUI
import { Box, Grid, Link, Typography } from "@mui/material";
//Style
import emergency from "../../../Assets/stock/emergency.jpg";

const flexCenterSX = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
};

const familyPictureSX = {
  backgroundImage: `url(${emergency})`,
  height: "350px",
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

const ServiceSupport = () => {
  return (
    <Box sx={{ ...flexCenterSX, mt: 6 }}>
      <Box sx={frameBoxSX}>
        <Typography variant="h4" fontWeight={"bold"} py={2}>
          Have an HVAC/Refrigeration emergency?
        </Typography>
        <Typography variant="h6" fontWeight={"lighter"} mb={4}>
          Commercial HVAC/Refrigeration system emergencies can happen at any
          time. You need a reliable partner with the infrastructure, expertise
          and training to react quickly.
          <br /> <br />
          At Cam Air Refrigeration and Heating, our team of certified HVAC/R
          technicians are ready 24/7/365 to troubleshoot and identify problems
          quickly and accurately. You can count on us for emergency HVAC/R
          service and 24-hour commercial HVAC/Refrigeration repair. <br />{" "}
          <br />
          When downtime is not an option,{" "}
          <Link href="tel:4033206690">Call Us</Link> and you will be immediately
          connected to one of technicians.
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb={10}
        >
          <Grid item sm={4} xs={12}>
            <Box sx={familyPictureSX} />
          </Grid>
          <Grid item sm={1} xs={0} />
          <Grid item sm={7} xs={12}>
            <Typography variant="h4" fontWeight={"bold"} pt={2}>
            What to expect
            </Typography>
            <Typography variant="h6" fontWeight={"lighter"}>
            <ul>
            <li>
              We will connect with you immediately
            </li>
            <li>
            One of our Certified Technicians will come to your location to diagnose the problem and provide a quote for the repair
            </li>
            <li>
            With your go-ahead, we’ll do the repair <b>right away</b> if we have the part
            </li>
            <li>
            If we need to order the part, we will schedule a convenient time to come back to your home, that day if possible
            </li>
            <li>
            If you decide you’d rather <strong>replace your equipment</strong>, then we’ll immediately connect you a Specialist to provide you with your options in-order to get the <b>best value</b>.
            </li>

          </ul>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ServiceSupport;
/* <Typography variant="h5" fontWeight={"bold"} pt={3} pb={2}>
Have an HVAC/Refrigeration emergency?
</Typography>
<Typography variant="h6" fontWeight={"lighter"} mb={6}>
Commercial HVAC/Refrigeration system emergencies
can happen at any time. You need a reliable partner with the
infrastructure, expertise and training to react quickly. 
<br/> <br/>
At
Cam Air Refrigeration and Heating, our team of certified HVAC/R technicians are
ready 24/7/365 to troubleshoot and identify problems quickly and
accurately. You can count on us for emergency HVAC/R service and
24-hour commercial HVAC/Refrigeration repair.  <br/> <br/>When
downtime is not an option, just call our 24-hour emergency and you will be immediately connected to one of technicians.
</Typography> */
