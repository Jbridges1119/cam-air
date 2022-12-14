import React from "react";
//MUI
import { Box, Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type companyListType = {
  text: string;
  path: string;
}[];

const companyList: companyListType = [
  { text: "- Services", path: "/services" },
  { text: "- Air Conditioning", path: "/airconditioning" },
  { text: "- Refrigeration", path: "/refrigeration" },
  { text: "- Heating", path: "/heating" },
  { text: "- About", path: "/about" },
  { text: "- Contact", path: "/contact" },
];

const buttonList = companyList.map((item) => {
  return (
    <Typography key={item.text} variant="body1">
      <Link style={{ textDecoration: "none" }} to={item.path}>
        {item.text}
      </Link>
    </Typography>
  );
});

const CompanyFooter = () => {
  return (
    <Box p={3}>
      <Typography variant="h6" sx={{ color: "#002685" }}>
        Company
      </Typography>
      <Divider />
      <Stack spacing={0.8}>{buttonList}</Stack>
    </Box>
  );
};

export default CompanyFooter;
