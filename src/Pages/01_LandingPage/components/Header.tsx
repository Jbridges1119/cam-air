import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import banner from "../../../Assests/headers/main.jpg";

const Header = () => {
  return (
    <Box
      sx={{
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
      }}
    >
      <Box sx={{ maxWidth: "1400px" }}>
        <Grid
          height={"75%"}
          container
          direction="row"
          justifyContent={{ sm: "flex-start", xs: "center" }}
          alignItems="center"
        >
          <Grid item xs={0} sm={1} md={0}></Grid>
          <Grid item xs={10} sm={8} md={4.8} ml={2} mb={22}>
            <Stack spacing={2}>
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Cam Air Refigeration and Heating provides commercial HVAC and
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
              <Button
                variant="contained"
                sx={{
                  p: { sm: "11px 20px", xs: "11px 10px" },
                  fontSize: { sm: "25px", xs: "20px" },
                  maxWidth: "400px",
                  border: "2px solid #1976d2",
                  "&:hover": {
                    background: "none",
                  },
                }}
              >
                Schedule An Appointment
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
