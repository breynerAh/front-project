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
import { ThemeColor } from "../../theme/theme";
import { useUserLoginStore } from "@/presentation/store/security/loginStore";
import { capitalizedFirst } from "@/common/utils";

export const ListOptions: FC<{
  idPopover?: string;
  openListOption: boolean;
  listOption: HTMLElement | null;
  handleCloseListOption: () => void;
}> = ({ idPopover, openListOption, listOption, handleCloseListOption }) => {
  const { data } = useUserLoginStore();
  const { logout } = useContext(AuthContext);
  const theme = ThemeColor();

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
              sx={{
                fontSize: "20px",
                position: "relative",
                right: "20px",
                color: theme.secondary.main,
              }}
            />
          </BoxUI>
          <TypographyUI>{capitalizedFirst(data?.userName || "")}</TypographyUI>
          <TypographyUI>{capitalizedFirst(data?.email || "")}</TypographyUI>
        </ListItem>
        <Divider component="li" />

        <ListItem
          sx={{
            margin: "5px 0",
            cursor: "pointer",
            ":hover": { background: theme.text.lines },
          }}
        >
          <SchoolOutlined />
          <TypographyUI sx={{ marginLeft: "10px" }}>
            Mi aprendizaje
          </TypographyUI>
        </ListItem>
        <ListItem
          sx={{
            margin: "5px 0",
            cursor: "pointer",
            ":hover": { background: theme.text.lines },
          }}
        >
          <CollectionsBookmarkOutlined />
          <TypographyUI sx={{ marginLeft: "10px" }}>Mi biblioteca</TypographyUI>
        </ListItem>
        <ListItem
          sx={{
            margin: "5px 0",
            cursor: "pointer",
            ":hover": { background: theme.text.lines },
          }}
        >
          <FavoriteBorderOutlined />
          <TypographyUI sx={{ marginLeft: "10px" }}>Favoritos</TypographyUI>
        </ListItem>
        <Divider component="li" />

        <ListItem
          sx={{
            margin: "5px 0",
            cursor: "pointer",
            ":hover": { background: theme.text.lines },
          }}
          onClick={() => handleCloseListOption()}
        >
          <ManageAccountsOutlined />
          <Link to="configuration">
            <TypographyUI sx={{ marginLeft: "10px" }}>
              Configuraciones
            </TypographyUI>
          </Link>
        </ListItem>
        <Divider component="li" />

        <ListItem
          sx={{
            margin: "5px 0",
            cursor: "pointer",
            ":hover": { background: theme.text.lines },
          }}
          onClick={() => logout()}
        >
          <LogoutOutlined />
          <TypographyUI sx={{ marginLeft: "10px" }}>Cerrar sesión</TypographyUI>
        </ListItem>
      </List>
    </Popover>
  );
};
