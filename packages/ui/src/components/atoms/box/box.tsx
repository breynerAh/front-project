import { forwardRef } from "react";
import { Box, BoxProps } from "@mui/material";

export const BoxUI = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <Box ref={ref} {...props} />;
});
