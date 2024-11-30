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
      padding: "5px 180px 0px",
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
