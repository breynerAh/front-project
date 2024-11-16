import { ButtonProps } from "@mui/material";

export type ButtonActionProps = {
  text: string;
  isMediaQuery?: boolean;
  backgroundColor?: string;
  textColor?: string;
  loading?: boolean;
  backgroundHover?: string;
} & ButtonProps;
