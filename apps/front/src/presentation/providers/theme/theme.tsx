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
      light: "#88BFE0",
      lighter: "#C3E1F3",
    },
    secondary: {
      main: "#03A685",
      dark: "#0389A6",
      light: "#6ED1BE",
      lighter: "#A8EBDE",
    },
    text: {
      principal: "#272729",
      secondary: "#606066",
      disable: "#A4A4AD",
      buttoms: "#FFFFFF",
    },
    success: {
      main: "#2DB60B",
      light: "#D2FFA6",
    },
    warning: {
      main: "#ED8A00",
      light: "#FFF5AB",
    },
    error: {
      main: "#940B12",
      light: "#FFB6B6",
    },
    info: {
      main: "#144BD4",
      light: "#9DCEF5",
    },
    system: {
      background: "rgba(243, 242, 255, 1)",
      backgroundSecond: "#FFFFFF",
      hover: "rgba(0, 1, 45, 0.05)",
    },
  };
};
