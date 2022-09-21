import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AC from '../../../Assets/stock/AC.jpg'

const DescriptionCards = () => {
  return (
    <Box sx={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Grid container sx={{maxWidth:'1200px', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        display={"grid"}
        gridTemplateColumns={{
          lg: "repeat(2, 1fr)",
          xs: "repeat(1, 1fr)",
       
        }}
        gap={2}
      ><Link to={""} >
        <Paper elevation={5} sx={{width:'100%', height:'100%',minHeight:'150px', borderRadius:6}}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item sm={4}>
            <Box sx={{backgroundImage:`url(${AC})`,minHeight:'150px', width: "100%",height:'100%',
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              borderTopLeftRadius:21,
              borderBottomLeftRadius:21,
              justifyContent: "flex-end",}}/>
            </Grid>
          
          <Grid item sm={8} >
            <Stack spacing={1} mx={2}>
          <Typography variant='h6' fontWeight={'bold'} color={"#1976d2"} >AIR CONDITIONING</Typography>
            <Typography variant='body1'>Our team of certified Technicians posses the knowledge, skill and experience to tackle any of you A/C projects</Typography></Stack>
            </Grid>
          </Grid>
        </Paper></Link>


        <Link to={""} >
        <Paper elevation={5} sx={{height:'100%'}}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={3}>
            <Box sx={{backgroundImage:`url(${AC})`,width: "100%",height:'100px',
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "flex-end",}}/>
            </Grid>
          
          <Grid item md={8}>
            <Typography variant='body1'>From walk-in freezers to milk tanks, our refrigeration service team are industry leaders.</Typography>
            </Grid>
          </Grid>
        </Paper></Link>
      </Grid>
    </Grid></Box>
  );
};

export default DescriptionCards;
