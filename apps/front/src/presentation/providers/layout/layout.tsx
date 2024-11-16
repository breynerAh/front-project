import { BoxUI } from "@repo/ui";
import { Outlet } from "react-router-dom";
import { Header } from "./header";

export function Layout() {
  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
    },
    body: {
      padding: "40px 180px 0px",
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
