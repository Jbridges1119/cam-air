import React from 'react'
//MUI
import { Box, Button, Divider, Stack, Typography } from '@mui/material'


type companyListType = string[]

const companyList: companyListType = [
  "- About",
  "- Air Conditioning",
  "- Refrigeration",
  "- Heating",
  "- Services",
  "- Contact",
];

const buttonList = companyList.map((item) =>{
  return(
  <Typography key={item} variant="h6" ><Button >{item}</Button></Typography>
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