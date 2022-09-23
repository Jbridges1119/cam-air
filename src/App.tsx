import { ThemeProvider } from "@mui/material";
import Footer from "./Pages/08_Footer/Footer";
import NavBar from "./NavBar";
import theme from "./Styles/theme";
import LandingPage from "./Pages/01_LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import About from './Pages/02_About/About'
import Contact from './Pages/07_Contact/Contact'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
