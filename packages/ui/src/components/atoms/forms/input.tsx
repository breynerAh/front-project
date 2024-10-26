import { TextField, TextFieldProps } from "@mui/material";
import { ControlledTextFieldProps } from "./types";
import { Controller } from "react-hook-form";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const TextFieldUI = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props: TextFieldProps, ref) => {
    return (
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        {...props}
        ref={ref}
      />
    );
  }
);

export const PasswordFieldUI = React.forwardRef<
  HTMLInputElement,
  TextFieldProps
>((props: TextFieldProps, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      variant="outlined"
      size="small"
      fullWidth
      {...props}
      ref={ref}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: !showPassword ? (
          <Visibility
            color="primary"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <VisibilityOff
            color="primary"
            onClick={() => setShowPassword(!showPassword)}
          />
        ),
      }}
    />
  );
});

export function ControlledTextFieldUI<T>({
  control,
  name,
  ...rest
}: ControlledTextFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name || ""}
      render={({ field }) =>
        rest.type === "password" ? (
          <PasswordFieldUI {...rest} {...field} />
        ) : (
          <TextFieldUI {...rest} {...field} />
        )
      }
    />
  );
}
