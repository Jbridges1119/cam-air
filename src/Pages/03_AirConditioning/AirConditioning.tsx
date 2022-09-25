import React from 'react'
//MUI
import { Box } from '@mui/material'
//Components
import ACHeader from './components/ACHeader';
import ACIntro from './components/ACIntro';
import ACBanner from './components/ACBanner';
import ACSupport from './components/ACSupport';

const BoxSX = {width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'};

const AirConditioning = () => {
  return (
    <Box sx={BoxSX}>
   <ACHeader/>
   <ACIntro/>
   <ACBanner/>
   <ACSupport/>
</Box>
  )
}

export default AirConditioning