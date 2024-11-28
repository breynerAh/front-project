import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { AppTheme } from "./theme";

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider theme={AppTheme()}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root, html, body": {
            margin: "0",
            padding: "0",
            height: "100%",
            overflow: "hidden",
          },
          "&::-webkit-scrollbar": {
            width: "9px" /* Tamaño del scroll en vertical */,
            height: "9px" /* Tamaño del scroll en horizontal */,
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#ccc",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-track": {
            height: "50%",
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
};
