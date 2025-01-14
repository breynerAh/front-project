import { capitalizedFirst } from "@/common/utils";
import { AuthContext } from "@/presentation/providers/context/authContext";
import { useUserLoginStore } from "@/presentation/store/security/loginStore";
import {
  CollectionsBookmarkOutlined,
  FavoriteBorderOutlined,
  LogoutOutlined,
  ManageAccountsOutlined,
  ModeEditOutlineOutlined,
  SchoolOutlined,
} from "@mui/icons-material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { Avatar, Divider, List, ListItem, Popover } from "@mui/material";
import {
  BoxUI,
  ButtonActionResponseUI,
  FileUploadButtonUI,
  TransitionsModalUI,
  TypographyUI,
} from "@repo/ui";
import { FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeColor } from "../../theme/theme";
import { useListOptions } from "@/presentation/hooks/layout/listOptions";

export const ListOptions: FC<{
  idPopover?: string;
  openListOption: boolean;
  listOption: HTMLElement | null;
  handleCloseListOption: () => void;
}> = ({ idPopover, openListOption, listOption, handleCloseListOption }) => {
  const theme = ThemeColor();
  const { data } = useUserLoginStore();
  const { logout } = useContext(AuthContext);
  const { preview, clearImage, handleUpload } = useListOptions();

  const [open, setOpen] = useState<boolean | undefined>(undefined);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
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
                marginLeft: "10px",
              }}
            >
              <Avatar sx={{ width: 120, height: 120 }}>M</Avatar>
              <ModeEditOutlineOutlined
                onClick={handleOpen}
                sx={{
                  fontSize: "20px",
                  position: "relative",
                  right: "20px",
                  color: theme.secondary.main,
                  cursor: "pointer",
                }}
              />
            </BoxUI>
            <TypographyUI>
              {capitalizedFirst(data?.userName || "")}
            </TypographyUI>
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
            <TypographyUI sx={{ marginLeft: "10px" }}>
              Mi biblioteca
            </TypographyUI>
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
            <TypographyUI sx={{ marginLeft: "10px" }}>
              Cerrar sesión
            </TypographyUI>
          </ListItem>
        </List>
      </Popover>
      <TransitionsModalUI
        state={open}
        title="Información personal"
        iconoTituloModal={PersonOutlineOutlinedIcon}
        handleCloseModal={() => setOpen(false)}
        width="30vw"
        minWidth="300px"
        height="auto"
        overflow="auto"
        paddingChildren="0px"
        footer
        childrenFooter={
          <>
            {preview !== "" && (
              <ButtonActionResponseUI
                onClick={() => {
                  clearImage();
                }}
                startIcon={<CloseOutlinedIcon />}
                textColor={theme.primary.main}
                text="Cancelar"
                sx={{
                  backgroundColor: theme.primary.lighter,
                  color: theme.primary.main,
                  height: "30px",
                  "&:hover": {
                    backgroundColor: theme.info.light,
                  },
                  marginRight: "10px",
                }}
              />
            )}
            <ButtonActionResponseUI
              onClick={() => handleUpload()}
              startIcon={<SaveOutlinedIcon />}
              text="Guardar"
              disabled={preview === ""}
              sx={{
                backgroundColor:
                  preview === "" ? theme.text.disable : theme.secondary.main,
                color: "white",
                height: "30px",
                "&:hover": {
                  backgroundColor: theme.secondary.dark,
                },
              }}
            />
          </>
        }
      >
        <BoxUI
          height="300px"
          sx={{
            background: theme.text.lines,
            backgroundImage: `url(${preview})`,
            backgroundSize: "cover", // Ajusta la imagen para cubrir todo el div
            backgroundPosition: "center", // Centra la imagen
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {preview === "" && (
            <FileUploadButtonUI
              text="Subir imagen"
              icon={<FileUploadOutlinedIcon fontSize="small" />}
              name="photo"
              disabledForm={false}
            />
          )}
          {/* <ButtonActionResponseUI
            onClick={() => {}}
            startIcon={<FileUploadOutlinedIcon />}
            text="Subir imagen"
            // disabled={isPending || isPendingUpdate}
            sx={{
              backgroundColor: theme.secondary.main,
              color: "white",
              height: "30px",
              "&:hover": {
                backgroundColor: theme.secondary.dark,
              },
            }}
          /> */}
        </BoxUI>
      </TransitionsModalUI>
    </>
  );
};
