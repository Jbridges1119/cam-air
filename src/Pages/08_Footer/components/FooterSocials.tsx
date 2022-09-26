import React from "react";
//MUI
import { Box, Button, CardMedia, Divider, Grid, styled } from "@mui/material";
//Style
import logo from "../../../Assets/logo2.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import theme from "../../../Styles/theme";

const iconSX = {
  height: "60px",
  width: "100%",
  color: theme.palette.info.main,
  "&:hover": {
    background: "none",
    color: theme.palette.primary.main,
  },
};
const ImgButton = styled(Button)`
max-height: 60px;
`
const GridSX = { display: "flex", justifyContent: "center" };
const SocialsFooter = () => {
  return (
    <Box p={3}>
      <CardMedia
        component="img"
        sx={{ my: { sm: 2, xs: 0.5 } }}
        image={logo}
        alt="Loading.."
      />
      <Divider />
      <Grid container direction="row">
        <Grid item xs={3} sx={GridSX}>
          <ImgButton >
            <FacebookIcon sx={iconSX}/>
          </ImgButton>
        </Grid>
        <Grid item xs={3} sx={GridSX}>
          <ImgButton >
            <TwitterIcon sx={iconSX} />
          </ImgButton>
        </Grid>
        <Grid item xs={3} sx={GridSX}>
          <ImgButton >
            <LinkedInIcon sx={iconSX} />
          </ImgButton>
        </Grid>
        <Grid item xs={3} sx={GridSX}>
          <ImgButton >
            <InstagramIcon sx={iconSX} />
          </ImgButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialsFooter;
