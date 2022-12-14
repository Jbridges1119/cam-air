import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../Assets/headers/main.jpg";

const outerBoxSX = {
  backgroundImage: `url(${banner})`,
  minHeight: "50vh",
  width: "100%",
  boxSizing: "border-box",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
  pt: { sm: "10%", xs: "30%" },
  pb: "18%",
  mt: { sm: 0, xs: "45px" },
  justifyContent: "center",
  alignItems: "center",
};

const buttonSX = {
  p: { sm: "11px 20px", xs: "11px 10px" },
  fontSize: { sm: "25px", xs: "20px" },
  maxWidth: "400px",
  border: "2px solid #1976d2",
  "&:hover": {
    background: "none",
  },
};

const LandingHeader = () => {
  return (
    <Box sx={outerBoxSX}>
      <Box sx={{ maxWidth: "1400px" }}>
        <Grid
          height={"75%"}
          container
          direction="row"
          justifyContent={{ sm: "flex-start", xs: "center" }}
          alignItems="center"
        >
          <Grid item xs={0} sm={1} md={0}></Grid>
          <Grid item xs={10} sm={8} md={4.8} mb={20}>
            <Stack spacing={2}>
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Cam Air Refrigeration and Heating provides commercial HVAC and
                refrigeration.
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "white", textAlign: { xs: "center", sm: "left" } }}
              >
                With over 50 years of combined experience, our team delivers
                quality, timely services that leads to greater energy efficiency
                and reduces operational costs for our customers.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <Button variant="contained" sx={buttonSX}>
                    Schedule An Appointment
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LandingHeader;
