//MUI
import { ThemeProvider } from "@mui/material";
//Style
import theme from "./Styles/theme";
//Navigation
import { Route, Routes } from "react-router-dom";
//Pages
import LandingPage from "./Pages/01_LandingPage/LandingPage";
import About from "./Pages/02_About/About";
import AirConditioning from "./Pages/03_AirConditioning/AirConditioning";
import Refrigeration from "./Pages/04_Refrigeration/Refrigeration";
import Heating from "./Pages/05_Heating/Heating";
import Services from "./Pages/06_Services/Services";
import Contact from "./Pages/07_Contact/Contact";
import Footer from "./Pages/08_Footer/Footer";
import NavBar from "./NavBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/airconditioning" element={<AirConditioning />} />
        <Route path="/refrigeration" element={<Refrigeration />} />
        <Route path="/heating" element={<Heating />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
