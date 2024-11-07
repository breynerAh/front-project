import { Delete, Edit, Visibility } from "@mui/icons-material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { TableActions } from "./types";

export const createTableActions = ({
  onDelete,
  onEdit,
  onShow,
}: TableActions) => {
  const arr = [
    ...(onShow ? [{ name: "show", fn: onShow, Icon: Visibility }] : []),
    ...(onEdit ? [{ name: "edit", fn: onEdit, Icon: Edit }] : []),
    ...(onDelete ? [{ name: "delete", fn: onDelete, Icon: Delete }] : []),
  ];

  return arr.map((item) => (
    <GridActionsCellItem
      key={item.name}
      icon={<item.Icon />}
      label={`tableActions.${item.name}`}
      onClick={() => item.fn()}
    />
  ));
};

export const brandVars = {
  local: {
    bk: "http://localhost:3001/api",
  },
  stage: {
    bk: "https://arisqa.www.com/api",
  },
};

export const selectBackendEnvironment = (): string => {
  const environment = window.location.host;

  if (environment?.includes("qa")) return brandVars?.stage?.bk;

  return brandVars?.local?.bk;
};
