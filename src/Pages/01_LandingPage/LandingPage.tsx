import { Box,  } from "@mui/material";
import Header from './components/Header'
import ReviewCarousel from './components/Reviews'
const LandingPage = () => {
  return (
    <>
      <Header/>

      <Box sx={{ height: "1000px" }} />
      <ReviewCarousel/>
    </>
  );
};

export default LandingPage;
