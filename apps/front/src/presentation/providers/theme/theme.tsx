import { createTheme } from "@mui/material";

export const AppTheme = () =>
  createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
    components: {},
  });

export const ThemeColor = () => {
  return {
    primary: {
      main: "#02385A",
      dark: "#011226",
      light: "#0389A6",
    },
  };
};
