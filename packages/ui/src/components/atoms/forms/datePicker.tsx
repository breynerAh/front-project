import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ControlledDatePickerUIProps, DatePickerUIProps } from "./types";
import { forwardRef } from "react";
import { Controller } from "react-hook-form";

/**
 * A custom DatePicker component.
 * @param {DatePickerUIProps} props - The props for the DatePicker component.
 * @param {React.Ref<HTMLDivElement>} ref - The ref for the DatePicker component.
 * @returns {JSX.Element} The rendered DatePicker component.
 *
 * @component
 * @example
 * // Usage:
 * <DatePickerUI label="Basic date picker" />
 */
export const DatePickerUI = forwardRef<HTMLDivElement, DatePickerUIProps>(
  ({helperText, error,...props}, ref) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          format="dd/MM/yyyy"
          {...props}
          sx={{ width: "100%" }}
          slotProps={{ textField: { error, helperText , size: "small" } }}
          ref={ref}
        />
      </LocalizationProvider>
    );
  }
);

/**
 * A controlled DatePicker component.
 * @param {ControlledDatePickerUIProps} props - The props for the controlled DatePicker component.
 * @returns {JSX.Element} The rendered controlled DatePicker component.
 *
 * @component
 * @example
 * // Usage:
 * <ControlledDatePicker
 *   control={control}
 *   name="date"
 *   label="Controlled date picker"
 * />
 */
export const ControlledDatePicker = (props: ControlledDatePickerUIProps) => {
  const { control, name, ...rest } = props;
  return (
    <Controller
      name={name || ""}
      control={control}
      render={({ field: { ref, ...field } }) => {
        return <DatePickerUI {...rest} {...field} ref={ref} />;
      }}
    />
  );
};
