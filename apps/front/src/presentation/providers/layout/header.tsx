import { BoxUI } from "@repo/ui";
import { ThemeColor } from "../theme/theme";
import { MenuLayout } from "./menu";
import MegaMenu from "@/presentation/providers/layout/ejemplo";

export function Header() {
  const theme = ThemeColor();

  return (
    <BoxUI sx={{ height: "80px", background: theme.primary.dark }}>
      {/* <MenuLayout /> */}
      <MegaMenu />
    </BoxUI>
  );
}
