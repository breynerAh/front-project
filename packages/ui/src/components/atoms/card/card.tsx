import { Card, CardContent, CardContentProps, CardProps } from "@mui/material";
import { forwardRef } from "react";

export const CardUI = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  return <Card ref={ref} {...props}>{props.children}</Card>;
});

export const CardContentUI = forwardRef<HTMLDivElement, CardContentProps>((props, ref) => {
  return <CardContent ref={ref} {...props}>{props.children}</CardContent>
});
