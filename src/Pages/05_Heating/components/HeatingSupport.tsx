import React from "react";
//MUI
import { Box, Grid, Typography } from "@mui/material";
//Style
import cold from "../../../Assets/stock/cold.jpg";

const flexCenterSX = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
};

const familyPictureSX = {
  backgroundImage: `url(${cold})`,
  height: "375px",
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

const HeatingSupport = () => {
  return (
    <Box sx={{ ...flexCenterSX, mt: 6 }}>
    <Box sx={frameBoxSX}>
      <Typography variant="h4" fontWeight={"bold"} py={2}>
      Furnace Effectiveness and Comfort
      </Typography>
      <Typography variant="h6" fontWeight={"lighter"} mb={4}>
      Many older furnaces that our technicians and estimators see daily are currently operating with efficiencies in the 70% to 80% AFUE range. We also see a number of early vintage 90+ rated systems that have ‘seen better days,’ and it’s due time to upgrade.
      <br/><br/>
       In this age of carbon footprint awareness, we do our best to offer you heating systems that allow you to lighten your environmental impact while still achieving superior comfort levels. Compared to furnaces that we replace on a regular basis, a new high-efficiency system will burn more cleanly, reducing emissions into the atmosphere. And by using less fuel in the process, our limited gas resource is conserved.
      <br/><br/>
       Whether you are currently in the market for a new furnace or gathering information for a future purchase, make sure that you have your current furnace inspected and serviced regularly to ensure your family’s safety.
      
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
          <Typography variant="h4" fontWeight={"bold"} py={2}>
            Don't be left in the cold
          </Typography>
          <Typography variant="h6" fontWeight={"lighter"}>
            We know working in the cold is not fun. If your heating system goes down during one of our cold winter days it can also be an emergency. Give us a call and we will get you comfortable again with our experienced technicians and speedy repairs. Our vans are fully equipped to repair your heating system and have you back on your way.
            <br />
            <br />
            Our specialists are available 24/7 to cater to any emergency you might have. Additionally, we offer After Hours Service, which ensures that you can always reach our specialists at any hour of the day. 
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Box>
  )
}

export default HeatingSupport