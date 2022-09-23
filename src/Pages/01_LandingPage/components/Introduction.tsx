import { Box, Typography } from '@mui/material'
import React from 'react'

const flexCenterSX = {
  display:'flex',
  justifyContent:'center',
  alignContent:'center',
  alignItems:'center'
}

const Introduction = () => {

  return (
    <Box sx={{...flexCenterSX, mt:6}}>
      <Box sx={{ width:'600px'}}>
      <Typography variant='h6' textAlign={'center'} color={"#002685"}>COMMERCIAL HEATING, COOLING & REFRIGERATION SERVICES</Typography>
      
      <Typography variant='h4' textAlign={'center'}  fontWeight={'bold'} py={2}>Industry expertise you need with a personal level of service.</Typography>
      <Typography variant='h6' textAlign={'center'} pt={2} mb={10}> Serving Southern Alberta since 1992, Cam Air Refrigeration & Heating specializes in commercial refrigeration and air conditioning. Our fully stocked service vehicles can provide 24 hour service to all brands of equipment. Our certified Refrigeration Technicians have experience with coolers, freezers, air conditioning, ice machines and more.</Typography>

    </Box></Box>
  )
}

export default Introduction