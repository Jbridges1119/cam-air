import React from "react";
//MUI
import { Box, Grid, Typography } from "@mui/material";
//Style
import banner from "../../../Assets/headers/maint.jpg";

const outerBoxSX = {
  backgroundImage: `url(${banner})`,
  minHeight: "50vh",
  width: "100%",
  boxSizing: "border-box",
  backgroundSize: "cover",
  backgroundPosition: "25% 75%",
  display: "flex",
  overflowX: "hidden",
  pt: { sm: "10%", xs: "30%" },
  pb: "18%",
  mt: { sm: 0, xs: "45px" },
  justifyContent: "center",
  alignItems: "center",
};

const titleSX = {
  color: "white",
  fontWeight: "bold",
  textAlign: { xs: "center", sm: "left" },
  pl: { sm: 3, xs: 0 },
};

const ServicesHeader = () => {
  return (
    <Box sx={outerBoxSX}>
      <Box sx={{ maxWidth: "1200px", width: "100%" }}>
        <Grid
          container
          direction="row"
          justifyContent={{ sm: "flex-start", xs: "center" }}
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={6} my={20}>
            <Typography variant="h1" sx={titleSX}>
              Service & Maintenance
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicesHeader;
