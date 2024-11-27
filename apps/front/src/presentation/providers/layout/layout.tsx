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
    },
    body: {
      padding: "40px 180px 0px",
      backgroundColor: theme.system.background,
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
