import React from 'react'
//MUI
import { Box } from '@mui/material'
//Components
import ContactHeader from './components/ContactHeader'
import Location from './components/Location'
const Contact = () => {
  return (
    <Box sx={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <ContactHeader/>
      <Location/>
      <Box height={'100vh'}/>
    </Box>
  )
}

export default Contact