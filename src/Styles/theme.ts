import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const secondaryColor = "#002685";
const infoColor = "#7d7d7d";

let theme = createTheme({
  palette: {
    secondary: {
      main: secondaryColor,
    },
    info:{
      main: infoColor,
    }
  },
  typography: {
    fontFamily: "Barlow",
    body1: {
      fontSize: "1.1rem",
      
    },
  },

});


theme = responsiveFontSizes(theme);

export default theme;
