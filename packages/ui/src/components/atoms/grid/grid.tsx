import { Grid, GridProps } from "@mui/material";
import { forwardRef } from "react";

export const GridUI = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  return <Grid ref={ref} {...props}>{props.children}</Grid>;
});
