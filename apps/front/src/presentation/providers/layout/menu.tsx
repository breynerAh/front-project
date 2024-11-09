import { useLayout } from "@/presentation/hooks/layout";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  Popover,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BoxUI, ControlledTextFieldUI, TypographyUI } from "@repo/ui";
import { ImageUI } from "../../../../../../packages/ui/src/components/atoms/img/img";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export function MenuLayout() {
  const {
    control,
    anchorEls,
    handleClickMenu,
    handleClose,
    arrayMenu,
    handleClickListOption,
    handleCloseListOption,
    openListOption,
    listOption,
    idPopover,
  } = useLayout();

  return (
    <BoxUI sx={{ width: "100%", height: "100%" }} role="presentation">
      <BoxUI
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 100px",
        }}
      >
        <BoxUI>
          <ImageUI src="/images/Logo_aris.svg" width={90} />
        </BoxUI>
        <BoxUI
          sx={{
            display: "flex",
            width: "20%",
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
                  anchorEls[menu?.id_menu] ? `menu-${menu?.id_menu}` : undefined
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
                >
                  {menu?.submenu?.map((submenu) => (
                    <MenuItem
                      key={submenu?.id_submenu}
                      onClick={() => handleClose(menu?.id_menu)}
                    >
                      {submenu?.name}
                    </MenuItem>
                  ))}
                </Menu>
              ) : null}
            </BoxUI>
          ))}
        </BoxUI>

        <BoxUI sx={{ width: "50%" }}>
          <ControlledTextFieldUI
            control={control}
            name="search"
            placeholder="Descubre algo nuevo hoy"
            sx={{ color: "red", background: "white", borderRadius: "5px" }}
          />
        </BoxUI>

        <BoxUI>
          <IconButton
            onClick={handleClickListOption}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={openListOption ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openListOption ? "true" : undefined}
          >
            <Avatar sx={{ width: 40, height: 40 }}>M</Avatar>
          </IconButton>
        </BoxUI>
        <Popover
          id={idPopover}
          open={openListOption}
          anchorEl={listOption}
          onClose={handleCloseListOption}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <List sx={{ width: 250, height: "auto" }}>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <BoxUI
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Avatar sx={{ width: 120, height: 120 }}>M</Avatar>
                <ModeEditOutlineOutlinedIcon
                  sx={{ fontSize: "20px", position: "relative", right: "20px" }}
                />
              </BoxUI>
              <TypographyUI>User</TypographyUI>
              <TypographyUI>Email</TypographyUI>
            </ListItem>
            <Divider component="li" />

            <ListItem sx={{ margin: "5px 0" }}>
              <SchoolOutlinedIcon />
              <TypographyUI sx={{ marginLeft: "10px" }}>
                Mi aprendizaje
              </TypographyUI>
            </ListItem>
            <ListItem sx={{ margin: "5px 0" }}>
              <CollectionsBookmarkOutlinedIcon />
              <TypographyUI sx={{ marginLeft: "10px" }}>
                Mi biblioteca
              </TypographyUI>
            </ListItem>
            <ListItem sx={{ margin: "5px 0" }}>
              <FavoriteBorderOutlinedIcon />
              <TypographyUI sx={{ marginLeft: "10px" }}>Favoritos</TypographyUI>
            </ListItem>
            <Divider component="li" />

            <ListItem sx={{ margin: "5px 0" }}>
              <ManageAccountsOutlinedIcon />
              <TypographyUI sx={{ marginLeft: "10px" }}>
                Configuraciones
              </TypographyUI>
            </ListItem>
            <Divider component="li" />

            <ListItem sx={{ margin: "5px 0" }}>
              <LogoutOutlinedIcon />
              <TypographyUI sx={{ marginLeft: "10px" }}>
                Cerrar sesión
              </TypographyUI>
            </ListItem>
          </List>
        </Popover>
      </BoxUI>
    </BoxUI>
  );
}
