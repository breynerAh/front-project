import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppTheme } from "./theme";

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider theme={AppTheme()}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
