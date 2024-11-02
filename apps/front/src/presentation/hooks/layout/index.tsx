import { resolver, validator } from "@/common/utils";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function useLayout() {
  const schema = validator.object().shape({
    search: validator.string().optional(),
  });

  const { control } = useForm({
    resolver: resolver(schema),
    values: {
      search: "",
    },
  });

  /**
   * handle Menú
   */
  const [anchorEls, setAnchorEls] = useState<{
    [key: number]: HTMLElement | null;
  }>({});

  const handleClickMenu = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    menuId: number
  ) => {
    console.log(menuId, 888);
    setAnchorEls((prev) => ({ ...prev, [menuId]: event.currentTarget }));
  };

  const handleClose = (menuId: number) => {
    setAnchorEls((prev) => ({ ...prev, [menuId]: null }));
  };

  /**
   * handle Menú
   */
  const [listOption, setListOption] = React.useState<null | HTMLElement>(null);
  const openListOption = Boolean(listOption);
  const handleClickListOption = (event: React.MouseEvent<HTMLElement>) => {
    setListOption(event.currentTarget);
  };
  const handleCloseListOption = () => {
    setListOption(null);
  };
  const idPopover = listOption ? "simple-popover" : undefined;

  const arrayMenu = [
    {
      id_menu: 2,
      menu: "Biblioteca",
      submenu: [
        { id_submenu: 1, id_menu: 2, name: "Opción 1" },
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

  return {
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
  };
}
