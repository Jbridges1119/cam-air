import React from 'react'
//MUI
import { Box } from '@mui/material'
//Components
import RefBanner from './components/RefBanner';
import RefHeader from './components/RefHeader'
import RefIntro from './components/RefIntro';
import RefSupport from './components/RefSupport';

const BoxSX = {width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'};

const Refrigeration = () => {
  return (
    <Box sx={BoxSX}>
      <RefHeader/>
      <RefIntro/>
      <RefBanner/>
      <RefSupport/>
  </Box>
  )
}

export default Refrigeration