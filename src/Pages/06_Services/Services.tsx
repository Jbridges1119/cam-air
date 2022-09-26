import React from 'react'
//MUI
import { Box } from '@mui/material'
//Components
import ServicesHeader from './components/ServicesHeader';
import ServicesIntro from './components/ServicesIntro';
import ServicesBanner from './components/ServicesBanner';
import ServiceSupport from './components/ServiceSupport';

const BoxSX = {width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'};

const Services = () => {
  return (
    <Box sx={BoxSX}>
    <ServicesHeader/>
    <ServicesIntro/>
    <ServicesBanner/>
    <ServiceSupport/>
</Box>
  )
}

export default Services