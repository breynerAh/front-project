import { getMenu } from "@/application/use-cases/administration/menu/getMudule.use-case";
import { MenuResponse } from "@/domain/interfaces/administration/menu/menu";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function useMenuOptions() {
  const { data: arrayMenu } = useQuery({
    queryKey: ["modulos"],
    queryFn: async () => getMenu(),
  });

  const [submenuAnchorEl, setSubmenuAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [selectedSubmenu, setSelectedSubmenu] = useState<MenuResponse[]>([]);

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
    setAnchorEls((prev) => ({ ...prev, [menuId]: event.currentTarget }));
  };

  const handleClose = (menuId: number) => {
    setAnchorEls((prev) => ({ ...prev, [menuId]: null }));
  };

  const handleOpenSubmenu = (
    event: React.MouseEvent<HTMLElement>,
    menu: MenuResponse[]
  ) => {
    setSubmenuAnchorEl(event.currentTarget);
    setSelectedSubmenu(menu);
  };

  const handleCloseSubmenu = () => {
    setSubmenuAnchorEl(null);
    setSelectedSubmenu([]);
  };
  return {
    arrayMenu,
    submenuAnchorEl,
    selectedSubmenu,
    anchorEls,
    handleClickMenu,
    handleClose,
    handleOpenSubmenu,
    handleCloseSubmenu,
  };
}
