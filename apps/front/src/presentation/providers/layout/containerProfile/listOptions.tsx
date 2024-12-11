import { AuthContext } from "@/presentation/providers/context/authContext";
import {
  CollectionsBookmarkOutlined,
  FavoriteBorderOutlined,
  LogoutOutlined,
  ManageAccountsOutlined,
  ModeEditOutlineOutlined,
  SchoolOutlined,
} from "@mui/icons-material";
import { Avatar, Divider, List, ListItem, Popover } from "@mui/material";
import { BoxUI, TypographyUI } from "@repo/ui";
import { FC, useContext } from "react";
import { Link } from "react-router-dom";

export const ListOptions: FC<{
  idPopover?: string;
  openListOption: boolean;
  listOption: HTMLElement | null;
  handleCloseListOption: () => void;
}> = ({ idPopover, openListOption, listOption, handleCloseListOption }) => {
  const { logout } = useContext(AuthContext);

  return (
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
            <ModeEditOutlineOutlined
              sx={{ fontSize: "20px", position: "relative", right: "20px" }}
            />
          </BoxUI>
          <TypographyUI>User</TypographyUI>
          <TypographyUI>Email</TypographyUI>
        </ListItem>
        <Divider component="li" />

        <ListItem sx={{ margin: "5px 0" }}>
          <SchoolOutlined />
          <TypographyUI sx={{ marginLeft: "10px" }}>
            Mi aprendizaje
          </TypographyUI>
        </ListItem>
        <ListItem sx={{ margin: "5px 0" }}>
          <CollectionsBookmarkOutlined />
          <TypographyUI sx={{ marginLeft: "10px" }}>Mi biblioteca</TypographyUI>
        </ListItem>
        <ListItem sx={{ margin: "5px 0" }}>
          <FavoriteBorderOutlined />
          <TypographyUI sx={{ marginLeft: "10px" }}>Favoritos</TypographyUI>
        </ListItem>
        <Divider component="li" />

        <ListItem sx={{ margin: "5px 0" }}>
          <ManageAccountsOutlined />
          <Link to="create/company">
            <TypographyUI sx={{ marginLeft: "10px" }}>
              Configuraciones
            </TypographyUI>
          </Link>
        </ListItem>
        <Divider component="li" />

        <ListItem
          sx={{ margin: "5px 0", cursor: "pointer" }}
          onClick={() => logout()}
        >
          <LogoutOutlined />
          <TypographyUI sx={{ marginLeft: "10px" }}>Cerrar sesión</TypographyUI>
        </ListItem>
      </List>
    </Popover>
  );
};
