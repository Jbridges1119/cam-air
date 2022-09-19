import { Box, Button, CardMedia, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Banner from "./components/Banner";
import SocialsFooter from './components/SocialsFooter'
import ContactUsFooter from './components/ContactUsFooter'
import CompanyFooter from './components/CompanyFooter'
const Footer = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', width:'100%'}}>
      <Banner />
      <Box
        sx={{
          
         
          display: "flex",
          justifyContent: "center",
          alignItems: 'center',

        }}
      >
        <Grid
          container
          direction="row"
          justifyContent={{sm:"space-between", xs:'center'}}
          alignItems="flex-start"
          sx={{maxWidth: "1200px",}}
        >
          <Grid item lg={3} md={3} sm={6} xs={10}>
          <ContactUsFooter/>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={10} >
          <CompanyFooter/>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={10}>
          <SocialsFooter/>
          </Grid>
      
        </Grid>
      </Box>
      <Box>  </Box>
      <Divider />
      <Button
        sx={{ all: "unset", cursor: "pointer" }}
        href="https://github.com/Jbridges1119/cam-air"
        target="_blank"
      >
        <Typography variant="body2" textAlign={'center'} color={"black"}>
          Designed and Built By Jeff Bridges
        </Typography>
      </Button>
    </Box>
  );
};

export default Footer;
