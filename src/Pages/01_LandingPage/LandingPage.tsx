//MUI
import { Box } from "@mui/material";
//Components
import Header from "./components/Header";
import ReviewCarousel from "./components/Reviews";
import Introduction from "./components/Introduction";
import ServiceBanner from "./components/ServiceBanner";
import DescriptionCards from "./components/DescriptionCards";
const LandingPage = () => {
  return (
    <>
      <Header />
      <Introduction />
    <DescriptionCards/>
      <Box sx={{ height: "1000px" }} />
      <ServiceBanner />
      <ReviewCarousel />
    </>
  );
};

export default LandingPage;
