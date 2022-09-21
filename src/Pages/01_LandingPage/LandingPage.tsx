//Components
import Header from "./components/LandingHeader";
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
    
      <ServiceBanner />
      <ReviewCarousel />
    </>
  );
};

export default LandingPage;
