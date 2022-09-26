import React from "react";
//MUI
import { Box, Divider, styled, Typography } from "@mui/material";

const LHTypo = styled(Typography)`
  line-height: 1.2;
`;
const BoldTypo = styled(Typography)`
  font-weight: bold;
`;
const ContactUsFooter = () => {
  return (
    <Box p={3}>
      <Typography variant="h6" sx={{ color: "#002685" }}>
        Contact Us
      </Typography>
      <Divider />
      <BoldTypo variant="body1">Address</BoldTypo>
      <LHTypo variant="subtitle1">
        313 13 St N, <br />
        Lethbridge, AB
        <br />
        T1H 2R9
      </LHTypo>
      <BoldTypo variant="body1">Phone</BoldTypo>
      <LHTypo variant="subtitle1">
        Main 403-320-6690
        <br />
        Fax 403-327-1432
      </LHTypo>
      <BoldTypo variant="body1">Email</BoldTypo>
      <LHTypo variant="subtitle1">Info@CamAirRefrigeration.com</LHTypo>
      <BoldTypo variant="body1">Business Hours</BoldTypo>
      <LHTypo variant="subtitle1">
        Monday – Friday: 8:00 AM - 4:30 PM
        <br />
        24/7 Emergency Service
      </LHTypo>
    </Box>
  );
};

export default ContactUsFooter;
