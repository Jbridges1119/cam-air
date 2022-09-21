import React from 'react'
//MUI
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom';


type companyListType = {
  text: string;
  path: string;
}[]


const companyList: companyListType = [
  {text: "- About", path: '/about'},
  {text: "- Air Conditioning", path: '/air%20conditioning'},
  {text: "- Refrigeration", path: '/refrigeration'},
  {text: "- Heating", path: '/heating'},
  {text: "- Services", path: '/services'},
  {text: "- Contact", path: '/contact'},
];

const buttonList = companyList.map((item) =>{
  return(
  <Typography key={item.text} variant="body1" ><Link style={{textDecoration:'none'}} to={item.path}>{item.text}</Link></Typography>
)})

const CompanyFooter = () => {
  return (
    <Box p={3}>
    <Typography variant="h6" sx={{color: '#002685'}}>Company</Typography><Divider/>
    <Stack spacing={0.8}>
    {buttonList}
    </Stack>
    </Box>
  )
}

export default CompanyFooter