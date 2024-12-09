import { forwardRef } from "react";
import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import {
  ControlledCheckboxUIProps,
  ControlledLabelledCheckboxUIProps,
  LabelledCheckboxUIProps,
} from "./types";

/**
 * CheckboxUI component.
 *
 * @remarks This component is a wrapper around the Checkbox component.
 * @component
 * @param {CheckboxProps} props - The props for the CheckboxUI component.
 * @param {React.Ref<HTMLButtonElement>} ref - The ref for the CheckboxUI component.
 * @returns {JSX.Element} The rendered CheckboxUI component.
 * @example
 * // Usage:
 * <Checkbox {...label} defaultChecked />
 * <Checkbox {...label} />
 * <Checkbox {...label} disabled />
 * <Checkbox {...label} disabled checked />
 */
export const CheckboxUI = forwardRef<HTMLButtonElement, CheckboxProps>(
  (props, ref) => {
    return <Checkbox {...props} ref={ref} />;
  }
);

/**
 * LabelledCheckboxUI component.
 *
 * @remarks This component is a wrapper around the FormControlLabel component.
 * @component
 * @param {LabelledCheckboxUIProps} props - The props for the LabelledCheckboxUI component.
 * @param {React.Ref<HTMLButtonElement>} ref - The ref for the LabelledCheckboxUI component.
 * @returns {JSX.Element} The rendered LabelledCheckboxUI component.
 * @example
 * // Usage:
 * <LabelledCheckboxUI label="Label" checkboxProps={{ defaultChecked }} />
 * <LabelledCheckboxUI label="Label" checkboxProps={{}} />
 * <LabelledCheckboxUI label="Label" checkboxProps={{ disabled }} />
 * <LabelledCheckboxUI label="Label" checkboxProps={{ disabled, checked }} />
 */
export const LabelledCheckboxUI = forwardRef<
  HTMLButtonElement,
  LabelledCheckboxUIProps
>(
  (
    { checkboxProps, label, customOnChange, checked, disabled = false },
    ref
  ) => {
    return (
      <FormControlLabel
        ref={ref}
        control={
          <CheckboxUI
            checked={checked}
            disabled={disabled}
            onChange={(e) => {
              if (customOnChange) {
                customOnChange(e);
              }
            }}
            {...checkboxProps}
          />
        }
        label={label}
      />
    );
  }
);

/**
 * ControlledCheckboxUI component.
 *
 * @remarks This component is a wrapper around the Controller component.
 * @component
 * @param {ControlledCheckboxUIProps} props - The props for the ControlledCheckboxUI component.
 * @param {React.Ref<HTMLButtonElement>} ref - The ref for the ControlledCheckboxUI component.
 * @returns {JSX.Element} The rendered ControlledCheckboxUI component.
 * @example
 * // Usage:
 * <ControlledCheckboxUI control={control} name="checkbox" />
 */
export const ControlledCheckboxUI = forwardRef<
  HTMLButtonElement,
  ControlledCheckboxUIProps
>(({ control, name, customOnChange, checked }, ref) => {
  return (
    <Controller
      name={name || ""}
      control={control}
      render={({ field }) => (
        <CheckboxUI
          ref={ref}
          onChange={(e) => {
            field.onChange(e.target.checked);
            if (customOnChange) {
              customOnChange(e);
            }
          }}
          checked={
            checked !== undefined && checked !== null ? checked : field.value
          }
        />
      )}
    />
  );
});

/**
 * ControlledLabelledCheckboxUI component.
 *
 * @remarks This component is a wrapper around the Controller component.
 * @component
 * @param {ControlledLabelledCheckboxUIProps} props - The props for the ControlledLabelledCheckboxUI component.
 * @param {React.Ref<HTMLButtonElement>} ref - The ref for the ControlledLabelledCheckboxUI component.
 * @returns {JSX.Element} The rendered ControlledLabelledCheckboxUI component.
 * @example
 * // Usage:
 * <ControlledLabelledCheckboxUI
 *   control={control}
 *   name="checkbox"
 *   label="Label"
 *   checkboxProps={{ defaultChecked }}
 * />
 */
export const ControlledLabelledCheckboxUI = forwardRef<
  HTMLButtonElement,
  ControlledLabelledCheckboxUIProps
>(({ checkboxProps, control, label, name }, ref) => {
  return (
    <Controller
      name={name || ""}
      control={control}
      render={({ field }) => (
        <LabelledCheckboxUI
          ref={ref}
          label={label}
          checkboxProps={{
            ...checkboxProps,
            onChange: (e) => field.onChange(e.target.checked),
            checked: field.value,
          }}
        />
      )}
    />
  );
});
