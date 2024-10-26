import { forwardRef } from "react";
import { Button, ButtonProps } from "@mui/material";

export const ButtonUI = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <Button
        ref={ref}
        fullWidth
        {...props}
        sx={{
          ...props.sx,
          textTransform: "capitalize",
        }}
      />
    );
  }
);
