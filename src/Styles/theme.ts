import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Barlow"
  }
});


theme = responsiveFontSizes(theme);

export default theme;
