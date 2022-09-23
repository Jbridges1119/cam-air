import React from "react";
//MUI
import { Box, Divider, Typography } from "@mui/material";


const ContactUsFooter = () => {
  return (
    <Box p={3}>
      <Typography variant="h6" sx={{ color: "#002685" }}>
        Contact Us
      </Typography>
      <Divider />
      <Typography variant="body1" fontWeight="bold">
        Address
      </Typography>
      <Typography variant="subtitle1" sx={{ lineHeight: 1.2 }}>
        313 13 St N, <br />
        Lethbridge, AB
        <br />
        T1H 2R9
      </Typography>
      <Typography variant="body1" fontWeight="bold">
        Phone
      </Typography>
      <Typography variant="subtitle1" sx={{ lineHeight: 1.2 }}>
        Main 403-320-6690
        <br />
        Fax 403-327-1432
      </Typography>
      <Typography variant="body1" fontWeight="bold">
        Email
      </Typography>
      <Typography variant="subtitle1" sx={{ lineHeight: 1.2 }}>
        Info@CamAirRefrigeration.com
      </Typography>
      <Typography variant="body1" fontWeight="bold">
        Business Hours
      </Typography>
      <Typography variant="subtitle1" sx={{ lineHeight: 1.2 }}>
        Monday – Friday: 8:00 AM - 4:30 PM
        <br />
        24/7 Emergency Service
      </Typography>
    </Box>
  );
};

export default ContactUsFooter;
