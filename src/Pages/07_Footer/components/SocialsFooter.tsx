import React from "react";
//MUI
import { Box, Button, CardMedia, Divider, Grid } from "@mui/material";
//Style
import logo from "../../../Assets/logo2.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const iconSX = {
  height: "60px",
  width: "100%",
  color: "#7d7d7d",
  "&:hover": {
    background: "none",
    color: "#1976d2",
  },
};
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
        <Grid item xs={4} sx={GridSX}>
          <Button sx={{ height: "60px" }}>
            <FacebookIcon sx={iconSX}></FacebookIcon>
          </Button>
        </Grid>
        <Grid item xs={4} sx={GridSX}>
          <Button
            sx={{ height: "60px" }}
            href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fwww.camairrefrigeration.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=Cam%20Air%20Refrigeration%20%26%20Heating%20%7C%2024%2F7%20Service%20Lethbridge%20%7C%20Home&url=https%3A%2F%2Fwww.camairrefrigeration.com%2F"
            target="_blank"
          >
            <TwitterIcon sx={iconSX} />
          </Button>
        </Grid>
        <Grid item xs={4} sx={GridSX}>
          <Button
            sx={{ height: "60px" }}
            href="https://www.linkedin.com/in/Jbridges1119/"
            target="_blank"
          >
            <LinkedInIcon sx={iconSX} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialsFooter;
