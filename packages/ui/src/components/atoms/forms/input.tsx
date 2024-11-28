import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { TextField, TextFieldProps } from "@mui/material";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { numberFormate } from "../../../../../../apps/front/src/common/utils";
import { ControlledTextFieldProps } from "./types";

export const TextFieldUI = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props: TextFieldProps, ref) => {
    const { ...otherProps } = props;
    return (
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        {...props}
        ref={ref}
        sx={{
          ...props.sx,
          "& .MuiInputLabel-root": {
            fontSize: "14px",
            top: "-1px",
            "&.Mui-focused, &.MuiInputLabel-shrink": {
              fontSize: "15px",
            },
          },
          "& .MuiInputBase-input": {
            fontSize: "14px",
          },
          "& .MuiInputBase-root": {
            height: "36px",
          },
        }}
        {...otherProps}
      />
    );
  }
);

export const TextFieldDateUI = React.forwardRef<
  HTMLInputElement,
  TextFieldProps
>((props: TextFieldProps, ref) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      InputLabelProps={{
        shrink: true,
      }}
      sx={{
        ...props.sx,
        "& .MuiInputLabel-root": {
          fontSize: "14px",
          top: "-1px",
          "&.Mui-focused, &.MuiInputLabel-shrink": {
            fontSize: "15px",
          },
        },
        "& .MuiInputBase-input": {
          fontSize: "14px",
        },
        "& .MuiInputBase-root": {
          height: "36px",
        },
      }}
      fullWidth
      {...props}
      ref={ref}
    />
  );
});

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
          <VisibilityOutlined
            color="disabled"
            cursor="pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <VisibilityOffOutlined
            color="disabled"
            cursor="pointer"
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
  password = false,
  isNumericPrice = false,
  ...rest
}: ControlledTextFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name || ""}
      render={({ field }) => {
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { value } = e.target;
          if (isNumericPrice && isNaN(Number(value))) field?.onChange("");
          field?.onChange(isNumericPrice ? numberFormate(value) : value);
        };
        return password ? (
          <PasswordFieldUI {...rest} {...field} />
        ) : (
          <TextFieldUI
            {...rest}
            {...field}
            onChange={onChange}
            value={isNumericPrice ? numberFormate(field?.value) : field?.value}
          />
        );
      }}
    />
  );
}

export function ControlledTextFieldDateUI<T>({
  control,
  name,
  ...rest
}: ControlledTextFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name || ""}
      render={({ field }) => (
        <TextFieldDateUI type="date" {...rest} {...field} />
      )}
    />
  );
}
