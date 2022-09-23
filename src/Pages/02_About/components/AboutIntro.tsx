import { Box, Typography } from '@mui/material'
import React from 'react'

const flexCenterSX = {
  display:'flex',
  justifyContent:'center',
  alignContent:'center',
  alignItems:'center'
}

const AboutIntro = () => {

  return (
    <Box sx={{...flexCenterSX, mt:6}}>
      <Box sx={{maxWidth:'1200px',
          width: {xs:"90%",lg:'100%'},
          display: "flex",
          flexDirection: "column",}}>
      <Typography variant='h6' color={"#002685"}>A Local business. Serving local businesses</Typography>
      
      <Typography variant='h3'   fontWeight={'bold'} py={2}>At Cam Air, we’re focused on providing the best possible customer service in safe, effective, and innovative ways.</Typography>
      <Typography variant='h6' fontWeight={'lighter'}  pt={2} mb={10}> Founded in 1992 by Mark Cameron, Cam Air Refrigeration & Heating is a privately owned family run company that has established itself as a leader in the commercial refrigeration, heating and air conditioning industry (HVACR). <br/><br/>
      It was Marks goal to provide the best personal level of service uncommon to their customers and through-out the decades this has become the foundation for Cam Air's success and continues to guide us to this day.
      <br/><br/>
      Working as One Team with customers and each other, Cam Air Refrigeration and Heating leverages our expertise and work ethic to provide responsive mechanical contracting solutions to commercial, and agricultural customers across southern Alberta.
      <br/><br/>
      Our experienced group of team members ensure that:
      
      <ul>
        <li>Our mechanical systems run efficiently, leaving our customers with peace of mind and time to focus on being productive</li>
        <li>Our employees are highly trained in their area of expertise and provide quality service to our customers</li>
        <li>Our company embraces innovation, remains financially strong, and honours our commitments to customers and community</li>
      </ul>
      </Typography>

    </Box></Box>
  )
}

export default AboutIntro