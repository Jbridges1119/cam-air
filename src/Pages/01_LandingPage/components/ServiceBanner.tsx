//MUI
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
//Style
import tools from "../../../Assets/stock/tools.jpg";
import theme from "../../../Styles/theme";

const bannerHeightSX = { height: "600px" };
const backgroundColor: string = theme.palette.secondary.main
const pictureAngleSX = {
  clipPath: `polygon(0 0, 100% 0%, 100% 100%, 100% 100%)`,
  ...bannerHeightSX,
  width: "20%",
  background: "#002685",
}

const pictureSX = {
  backgroundImage: `url(${tools})`,
  ...bannerHeightSX,
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "flex-end",
}

const backgroundBoxSX = {
  background: backgroundColor,
  ...bannerHeightSX,
}
const ServiceBanner = () => {
  return (
    <Box
      sx={backgroundBoxSX}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={0} md={6}>
          <Box
            sx={pictureSX}
          >
            <Box
              sx={pictureAngleSX}
            ></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              ...bannerHeightSX,
              width: "100%",
            }}
          >
            <Stack
              spacing={4}
              sx={{
                my: { sm: 4, xs: 0 },
                py: { xs: 4, sm: 10 },
                maxWidth: "550px",
                mx: 4,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: "lighter" }}
              >
                WE ARE YOUR PREVENTATIVE MAINTENANCE PARTNER
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Forget downtime. We’re available around the clock, 365 days a
                year, to keep your business running smoothly.
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: "lighter" }}
              >
                Whether it’s an emergency repair, or general service and
                maintenance, Cam Air’s highly trained team of Certified HVAC and
                Refrigeration Tradespeople are ready to get you back up and
                running as fast as possible without compromising on quality.
              </Typography>
              <Link to="/services" >
                <Typography variant="body1" sx={{ color: "white" }}>
                  Learn more about our maintenance services
                </Typography>
              </Link>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceBanner;
