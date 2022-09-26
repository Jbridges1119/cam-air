//MUI
import { Box, Button, Grid, Stack, Typography, styled } from "@mui/material";
//React-Router-Dom
import { Link } from "react-router-dom";
//Style
import refrigeration from "../../../Assets/stock/refrigeration.jpg";
import theme from "../../../Styles/theme";

const bannerHeightSX = { height: "600px" };
const backgroundColor: string = theme.palette.secondary.main;
const backgroundBoxSX = {
  width: "100%",
  background: backgroundColor,
  ...bannerHeightSX,
};

const pictureSX = {
  backgroundImage: `url(${refrigeration})`,
  ...bannerHeightSX,
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "flex-end",
};

const pictureAngleSX = {
  clipPath: `polygon(0 0, 100% 0%, 100% 100%, 100% 100%)`,
  ...bannerHeightSX,
  width: "20%",
  background: backgroundColor,
};

const textStackSX = {
  my: { sm: 4, xs: 0 },
  py: { xs: 3, lg: 6 },
  maxWidth: "550px",
  mx: 4,
};

const contactButtonSX = {
  m: 1,
  fontSize: { sm: "15px", xs: "15px" },
  py: 1,
  border: "2px solid #1976d2",
  "&:hover": {
    background: "none",
  },
};

const LightText = styled(Typography)`
  color: white;
  font-weight: lighter;
  padding-bottom: 10px;
`;

const textBoxSX = {
  ...bannerHeightSX,
  width: "100%",
  display: "flex",
  alignItems: "center",
};

const RefBanner = () => {
  return (
    <Box sx={backgroundBoxSX}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={0} md={6}>
          <Box sx={pictureSX}>
            <Box sx={pictureAngleSX}></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={textBoxSX}>
            <Stack spacing={1} sx={textStackSX}>
              <Typography
                variant="h5"
                sx={{ color: "white", fontWeight: "bold", pb: 0.5 }}
              >
                Commercial refrigeration installation, repair and maintenance?
              </Typography>
              <LightText variant="h6">
                If you need to make it cold and keep it cold Cam Air has the
                knowledge, experience and expertise to do it right.
              </LightText>
              <LightText variant="h6">
                For <Link to={"/about"}>over 30 years</Link> we’ve taken pride
                in creating systems that are cost-effective, energy efficient,
                durable and serviceable.
              </LightText>
              <LightText variant="h6">
                Nothing is beyond our capabilities when it comes to
                refrigeration.
              </LightText>
              <LightText variant="h6">
                Contact us today for a FREE consultation.
              </LightText>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Button variant="contained" sx={contactButtonSX}>
                  Contact Us
                </Button>
              </Link>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RefBanner;
