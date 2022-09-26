import React from "react";
//MUI
import { Box, Typography, Grid, styled, Paper } from "@mui/material";
//React-Router-Dom
import { Link } from "react-router-dom";
//Style
import thumbsUp from "../../../Assets/stock/thumbsUp.jpg";
import theme from "../../../Styles/theme";

const flexCenterSX = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  mt: 6,
};

const textBoxSX = {
  maxWidth: "1200px",
  width: { xs: "90%", lg: "100%" },
  display: "flex",
  flexDirection: "column",
};

const familyPictureSX = {
  backgroundImage: `url(${thumbsUp})`,
  height: { sm: "475px", xs: "300px" },
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  my: 2,
};

const RepeatedText = styled(Typography)`
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: lighter;
`;

const SubTitle = styled(Typography)`
font-weight: bold;
padding-top: 20px;
padding-bottom: 15px;
`
const BlueBoldText = styled(Typography)`
font-size:25px;
font-weight: bold;
color: ${theme.palette.secondary.main}
`
const paperSX = {height: '250px', display:'flex', justifyContent:'center', alignItems:'center', my:2}

const HeatingIntro = () => {
  return (
    <Box sx={{ ...flexCenterSX }}>
      <Box sx={textBoxSX}>
        <Typography variant="h4" fontWeight={"bold"} py={2}>
          HVAC & Refrigeration equipment repair, service and maintenance.
        </Typography>
        <RepeatedText variant="h6">
          At Cam Air, we believe it is important to be conscientious. We realize
          that this must be demonstrated in the diverse services that we
          provide. Whether it’s a small refrigerated case or a large
          refrigerated storage facility, our team of professionals are excited
          to understand your needs and work hard to provide solutions in a safe
          and attentive manner.
        </RepeatedText>
        <RepeatedText variant="h6">
          Maintaining your Heating, Ventilation, Air Conditioning, or
          Refrigeration equipment at peak operating performance is no different
          than changing your oil or maintaining tire pressure in your car.
          Without regular maintenance, all mechanical pieces of equipment,
          whether through time or neglect will not give you the mileage,
          performance, efficiency or reliability you expect and could even end
          up costing you more money to operate.
        </RepeatedText>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={5.5}>
            <SubTitle variant="h5" >
              HVAC/Refrigeration maintenance programs to fit your needs and your
              budget
            </SubTitle>
            <Typography variant="h6" fontWeight={"lighter"} mb={2}>
              Minimize your downtime and keep your building environment
              comfortable with one of our customizable industrial or commercial
              HVAC maintenance programs. Our technicians are certified to
              perform maintenance inspections on all makes and models of HVAC/R
              equipment.
              <br />
              <br />
              Our planned maintenance program is considered by our many
              customers to be invaluable. Owners that have regularly maintained
              equipment keep large emergency breakdown costs, and equipment down
              time, drastically reduced.
              <br />
              <br />
              Contact us today and we’ll design a custom maintenance program
              that is tailored to your equipment needs.
            </Typography>
          </Grid>
          <Grid item xs={0} md={1} />
          <Grid item xs={12} md={5.5}>
            <Box sx={familyPictureSX} />
          </Grid>
        </Grid>

        <SubTitle variant="h4">
          Did you know?
        </SubTitle>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={6}
        >
          <Grid item xs={12} md={3}>
            <Paper elevation={8} sx={{...paperSX, p:6}}>
              <Typography variant="h6"  textAlign={'center'}>
                Unscheduled repairs often cost <BlueBoldText>25% MORE</BlueBoldText> than scheduled
                maintenance
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={8} sx={{...paperSX, p:{xs:6,md:2}}}>
              <Typography variant="h6"  textAlign={'center'}>
                Properly maintained equipment can last <BlueBoldText>35% LONGER</BlueBoldText> 
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={8} sx={{...paperSX, p:{xs:6,md:2}}}>
              <Typography variant="h6"  textAlign={'center'}>
                Properly maintained equipment can have <BlueBoldText>45% REDUCED</BlueBoldText> energy costs
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeatingIntro;

{
  /* <Typography variant="h5" fontWeight={"bold"} pt={3} pb={2}>
Have an HVAC/Refrigeration emergency?
</Typography>
<Typography variant="h6" fontWeight={"lighter"} mb={6}>
Commercial HVAC/Refrigeration system emergencies
can happen at any time. You need a reliable partner with the
infrastructure, expertise and training to react quickly. 
<br/> <br/>
At
Cam Air Refrigeration and Heating, our team of certified HVAC/R technicians are
ready 24/7/365 to troubleshoot and identify problems quickly and
accurately. You can count on us for emergency HVAC/R service and
24-hour commercial HVAC/Refrigeration repair.  <br/> <br/>When
downtime is not an option, just call our 24-hour emergency and you will be immediately connected to one of technicians.
</Typography> */
}
