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

export const regex = {
  alphanumeric: {
    execute: /^[a-zA-Z0-9\s]*$/,
    message: "Por favor, Valide el campo",
  },
  noSpaces: {
    execute: /^[^\s]*$/,
    message: "El valor no puede llevar espacios",
  },
  trim: {
    execute: /^(?!\s)[\w\s\S]*(?<!\s)$/,
    message: "Sin espacios de principio y final",
  },
  onlyLetters: {
    execute: /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]*$/,
    message: "Por favor, solo introduzca letras validas",
  },
  email: {
    execute:
      /^(?!.*\.\.)[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/,
    message: "Por favor, introduce un email válido",
  },
  onlyNumbers: {
    execute: /^[0-9]*$/,
    message: "Por favor, introduce un número válido",
  },
  onlyPositiveNumbers: {
    execute: /^[1-9]\d*$/,
    message: "Por favor, introduce un número positivos",
  },
  allCharactersTrimmed: {
    execute: /^(?!\s)[\s\S]*(?<!\s)$/,
    message: "El valor no puede tener espacios al principio ni al final",
  },
};
