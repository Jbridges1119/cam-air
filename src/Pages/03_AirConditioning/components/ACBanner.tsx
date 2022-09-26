//MUI
import { Box, Button, Grid, Stack, Typography, styled } from "@mui/material";
//React-Router-Dom
import { Link } from "react-router-dom";
//Style
import AC from "../../../Assets/stock/AC.jpg";
import theme from "../../../Styles/theme";

const bannerHeightSX = { height: "600px" };
const backgroundColor: string = theme.palette.secondary.main;
const backgroundBoxSX = {
  width: "100%",
  background: backgroundColor,
  ...bannerHeightSX,
};

const pictureSX = {
  backgroundImage: `url(${AC})`,
  ...bannerHeightSX,
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "top-right",
  display: "flex",
  justifyContent: "flex-end",
  mt:2
};

const pictureAngleSX = {
  clipPath: `polygon(0 0, 100% 0%, 100% 100%, 100% 100%)`,
  ...bannerHeightSX,
  width: "20%",
  background: backgroundColor,
  mr:{md:'-1px',xs:0},
  mt:{md:'-1px',xs:0}
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
const ACBanner = () => {
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
                variant="h3"
                sx={{ color: "white", fontWeight: "bold", pb: 0.5 }}
              >
                Need a new AC system?
              </Typography>
              <LightText variant="h6">
                At Cam Air we can <Link style={{color:'white'}}to={"/services"}>design, build, install, and
                maintain</Link> your commercial AC system.
              </LightText>
              <LightText variant="h6">
                Our vendor partnerships and experience allow us to provide you
                an air conditioning services at any budget.
              </LightText>
              <LightText variant="h6">
                With more than 30 years experience, our highly-trained
                multidisciplinary team will work with you to assess your needs,
                address your concerns, and deliver a solution that works for
                you.
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

export default ACBanner;
