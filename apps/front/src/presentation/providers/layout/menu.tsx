import { useLayout } from "@/presentation/hooks/layout";
import { MenuOptions } from "@/presentation/providers/layout/menuOption";
import { useLayoutStore } from "@/presentation/store/layout";
import { BoxUI, ControlledTextFieldUI, TypographyUI } from "@repo/ui";
import { Link } from "react-router-dom";
import { ImageUI } from "../../../../../../packages/ui/src/components/atoms/img/img";
import { AvatarComponent, ListOptions } from "./containerProfile";
import { DrawerLayout } from "./drawer";
export function MenuLayout() {
  const { media } = useLayoutStore();
  const {
    control,
    handleClickListOption,
    handleCloseListOption,
    openListOption,
    listOption,
    idPopover,
  } = useLayout();

  return (
    <BoxUI
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
      role="presentation"
    >
      {<DrawerLayout />}
      <BoxUI
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: {
            xs: "0 64px", // Padding para pantallas pequeñas
            sm: "0 64px", // Padding para pantallas medianas
            md: "0 64px", // Padding para pantallas grandes
            lg: "0 120px", // Padding para pantallas más grandes
            xl: "0 180px", // Padding máximo para pantallas muy grandes
          },
        }}
      >
        <Link to="/app">
          <BoxUI sx={{ minWidth: "40px", marginRight: "10px" }}>
            <ImageUI src="/images/Logo_aris.svg" width={90} />
          </BoxUI>
        </Link>
        {!media && (
          <BoxUI
            sx={{
              display: "flex",
              width: "25%",
              justifyContent: "space-between",
            }}
          >
            <BoxUI
              sx={{
                display: "flex",
                color: "white",
                width: "20%",
              }}
            >
              <Link to="/app">
                <BoxUI sx={{ padding: "5px" }}>
                  <TypographyUI
                    sx={{
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontSize: "14px",
                    }}
                  >
                    Principal
                  </TypographyUI>
                </BoxUI>
              </Link>
            </BoxUI>
            <MenuOptions />
          </BoxUI>
        )}

        <BoxUI sx={{ width: "50%", minWidth: "220px" }}>
          <ControlledTextFieldUI
            control={control}
            name="search"
            placeholder="Descubre algo nuevo hoy"
            sx={{ background: "white", borderRadius: "5px" }}
          />
        </BoxUI>

        <AvatarComponent
          handleClickListOption={handleClickListOption}
          openListOption={openListOption}
        />

        <ListOptions
          handleCloseListOption={handleCloseListOption}
          openListOption={openListOption}
          listOption={listOption}
          idPopover={idPopover}
        />
      </BoxUI>
    </BoxUI>
  );
}
