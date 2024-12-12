import { BoxUI } from "@repo/ui";
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { ThemeColor } from "@/presentation/providers/theme/theme";

export function Layout() {
  const theme = ThemeColor();
  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    body: {
      padding: {
        xs: "5px 20px 0px", // Padding para pantallas pequeñas
        sm: "5px 64px 0px", // Padding para pantallas medianas
        md: "5px 64px 0px", // Padding para pantallas grandes
        lg: "5px 120px 0px", // Padding para pantallas más grandes
        xl: "5px 180px 0px", // Padding máximo para pantallas muy grandes
      },
      backgroundColor: theme.system.background,
      flexGrow: 1,
      overflow: "auto",
    },
  };

  return (
    <BoxUI sx={style.container}>
      <BoxUI>
        <Header />
      </BoxUI>
      <BoxUI sx={style.body}>
        <Outlet />
      </BoxUI>
    </BoxUI>
  );
}
