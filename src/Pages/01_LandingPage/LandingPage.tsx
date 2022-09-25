//Components
import Header from "./components/LandingHeader";
import ReviewCarousel from "./components/Reviews";
import Introduction from "./components/LandingIntro";
import ServiceBanner from "./components/LandingBanner";
import DescriptionCards from "./components/LandingDescriptionCards";
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
