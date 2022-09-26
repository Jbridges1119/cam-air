import { ThemeProvider } from "@mui/material";
import Footer from "./Pages/08_Footer/Footer";
import NavBar from "./NavBar";
import theme from "./Styles/theme";
import LandingPage from "./Pages/01_LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import About from './Pages/02_About/About'
import Contact from './Pages/07_Contact/Contact'
import ScrollToTop from "./Hooks/ScrollToTop";
import Refrigeration from "./Pages/04_Refrigeration/Refrigeration";
import AirConditioning from "./Pages/03_AirConditioning/AirConditioning";
import Heating from "./Pages/05_Heating/Heating";
function App() {

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <ScrollToTop>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About/>} />
      <Route path="/airconditioning" element={<AirConditioning/>} />
      <Route path="/refrigeration" element={<Refrigeration/>} />
      <Route path="/heating" element={<Heating/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
      </ScrollToTop>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
