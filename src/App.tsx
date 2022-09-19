import { ThemeProvider } from "@mui/material";
import Footer from "./Footer";
import NavBar from "./NavBar";
import theme from "./Styles/theme";
import LandingPage from './Pages/01_LandingPage/LandingPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <NavBar/>
    <LandingPage/>
    {/* <Footer/> */}
    </ThemeProvider>
  );
}

export default App;
