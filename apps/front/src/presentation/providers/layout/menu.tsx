import { useLayout } from "@/presentation/hooks/layout";
import { useLayoutStore } from "@/presentation/store/layout";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BoxUI, ControlledTextFieldUI, TypographyUI } from "@repo/ui";
import { ImageUI } from "../../../../../../packages/ui/src/components/atoms/img/img";
import { AvatarComponent, ListOptions } from "./containerProfile";
import { DrawerLayout } from "./drawer";
export function MenuLayout() {
  const { media } = useLayoutStore();
  const {
    control,
    anchorEls,
    handleClickMenu,
    handleClose,
    // arrayMenu,
    handleClickListOption,
    handleCloseListOption,
    openListOption,
    listOption,
    idPopover,
  } = useLayout();

  const arrayMenu = [
    {
      id_menu: 2,
      menu: "Biblioteca",
      submenu: [
        {
          id_submenu: 1,
          id_menu: 2,
          name: "Opción 1",
          topics: ["Gestión empresarial", "Plan de negocios", "ChatGPT"],
        },
        {
          id_submenu: 2,
          id_menu: 2,
          name: "Opción 2",
          topics: ["Estrategia de negocios", "Negocios en línea", "Liderazgo"],
        },
        { id_submenu: 3, id_menu: 2, name: "Opción 3" },
      ],
    },
    {
      id_menu: 3,
      menu: "Cursos",
      submenu: [
        { id_submenu: 1, id_menu: 3, name: "Curso 1" },
        { id_submenu: 2, id_menu: 3, name: "Curso 2" },
        { id_submenu: 3, id_menu: 3, name: "Curso 3" },
      ],
    },
  ];

  return (
    <BoxUI sx={{ width: "100%", height: "100%" }} role="presentation">
      <BoxUI
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 180px",
        }}
      >
        <BoxUI>
          <ImageUI src="/images/Logo_aris.svg" width={90} />
        </BoxUI>
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
            {arrayMenu?.map((menu) => (
              <BoxUI
                key={menu?.id_menu}
                sx={{
                  display: "flex",
                  color: "white",
                  width: "30%",
                }}
              >
                <TypographyUI
                  sx={{
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                  id={menu?.id_menu?.toString()}
                  aria-controls={
                    anchorEls[menu?.id_menu]
                      ? `menu-${menu?.id_menu}`
                      : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={anchorEls[menu?.id_menu] ? "true" : undefined}
                  onClick={(e) => handleClickMenu(e, menu?.id_menu)}
                >
                  {menu?.menu}
                  {menu?.submenu && <ExpandMoreIcon />}
                </TypographyUI>
                {menu?.submenu?.length ? (
                  <Menu
                    id={`menu-${menu?.id_menu}`}
                    anchorEl={anchorEls[menu?.id_menu]}
                    open={Boolean(anchorEls[menu?.id_menu])}
                    onClose={() => handleClose(menu?.id_menu)}
                    MenuListProps={{
                      "aria-labelledby": menu?.id_menu?.toString(),
                    }}
                    sx={{
                      "& .MuiMenu-paper": {
                        width: "200px",
                        minHeight: "500px",
                      },
                    }}
                  >
                    {menu?.submenu?.map((submenu) => (
                      <MenuItem
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        key={submenu?.id_submenu}
                        onClick={() => handleClose(menu?.id_menu)}
                      >
                        {submenu?.name}
                        <ArrowForwardIosOutlined
                          sx={{ width: "15px", color: "gray" }}
                        />
                      </MenuItem>
                    ))}
                  </Menu>
                ) : null}
              </BoxUI>
            ))}
          </BoxUI>
        )}

        {<DrawerLayout />}
        <BoxUI sx={{ width: "50%" }}>
          <ControlledTextFieldUI
            control={control}
            name="search"
            placeholder="Descubre algo nuevo hoy"
            sx={{ color: "red", background: "white", borderRadius: "5px" }}
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
