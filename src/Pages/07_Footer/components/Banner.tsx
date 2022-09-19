import React from 'react'
import { Box, Button, Typography } from "@mui/material";
const Banner = () => {
  return (
    <Box
    sx={{
      background: "#002685",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      py: 4,
    }}
  >
    <Box
      sx={{
        background: "#002685",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        maxWidth: "1200px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          m: 1.5,
          color: "white",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        Contact our expert team today for a FREE no-obligation consultation
      </Typography>
      <Button
        variant="contained"
        sx={{
          m: 1.5,
          fontSize: { sm: "20px", xs: "20px" },
          py: 1.5,
          border: "2px solid #1976d2",
          "&:hover": {
            background: "none",
          },
        }}
      >
        Contact Us Now
      </Button>
    </Box>
  </Box>
  )
}

export default Banner