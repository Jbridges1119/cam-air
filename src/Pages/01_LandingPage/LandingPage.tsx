import { Box,  } from "@mui/material";
import Header from './components/Header'
import ReviewCarousel from './components/Reviews'
import Introduction from './components/Introduction'
import ServiceBanner from './components/ServiceBanner'
const LandingPage = () => {
  return (
    <>
      <Header/>
    <Introduction/>

      <Box sx={{ height: "1000px" }} />
      <ServiceBanner/>
      <ReviewCarousel/>
    </>
  );
};

export default LandingPage;
