import { Typography, TypographyProps } from "@mui/material";
import { forwardRef } from "react";

export const TypographyUI = forwardRef<HTMLSpanElement, TypographyProps>((props, ref) => {
  return <Typography ref={ref} {...props}>{props.children}</Typography>
});
