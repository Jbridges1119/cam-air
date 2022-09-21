import { ThemeProvider } from "@mui/material";
import Footer from "./Pages/07_Footer/Footer";
import NavBar from "./NavBar";
import theme from "./Styles/theme";
import LandingPage from "./Pages/01_LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
      <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
