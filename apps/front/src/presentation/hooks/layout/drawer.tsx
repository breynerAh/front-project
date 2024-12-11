import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ScreenSearchDesktopOutlinedIcon from "@mui/icons-material/ScreenSearchDesktopOutlined";
import { useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { useLayoutStore } from "@/presentation/store/layout";

export function useDrawer() {
  const [open, setOpen] = React.useState(false);
  const { updateMedia } = useLayoutStore();
  const media = useMediaQuery("(max-width: 1200px)");

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
        { id_submenu: 2, id_menu: 2, name: "Opción 2" },
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

  const iconMenu = (index: number) => {
    switch (index) {
      case 0:
        return <LibraryBooksOutlinedIcon />;
      case 1:
        return <ScreenSearchDesktopOutlinedIcon />;
      default:
        return <CircleOutlinedIcon />;
    }
  };

  useEffect(() => {
    if (media) {
      updateMedia?.(true);
      setOpen(true);
    } else {
      updateMedia?.(false);
      setOpen(false);
    }
  }, [media, updateMedia]);

  return {
    arrayMenu,
    setOpen,
    open,
    iconMenu,
    media,
  };
}
