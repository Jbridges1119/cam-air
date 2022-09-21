import { Box } from '@mui/material'
import React from 'react'
import AboutBanner from './components/AboutBanner'
import AboutHeader from './components/AboutHeader'
import AboutIntro from './components/AboutIntro'
import AboutSafety from './components/AboutSafety'
const About = () => {
  return (
    <Box sx={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <AboutHeader/>
      <AboutIntro/>
      <AboutBanner/>
      <AboutSafety/>
    </Box>
  )
}

export default About