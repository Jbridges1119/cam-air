import React from 'react'
//MUI
import { Box } from '@mui/material'
//Components
import ContactHeader from './components/ContactHeader'
import Location from './components/Location'
import ContactForm from './components/ContactForm'
const Contact = () => {
  return (
    <Box sx={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <ContactHeader/>
      <Location/>
      <ContactForm/>
      <Box height={'100vh'}/>
    </Box>
  )
}

export default Contact