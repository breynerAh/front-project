import { FormControlLabel, Switch, SwitchProps } from "@mui/material";
import { Controller } from "react-hook-form";
import {
  ControlledLabelledSwitchUIProps,
  ControlledSwitchUIProps,
  LabelledSwitchUIProps,
} from "./types";
import { forwardRef } from "react";

/**
 * A custom switch component.
 *
 * @param {SwitchProps} props - The props for the Switch component.
 * @param {React.Ref<HTMLButtonElement>} ref - The ref for the button element.
 * @returns {JSX.Element} The rendered Switch component.
 *
 * @component
 * @example
 * // Usage:
 * <SwitchUI checked={true} onChange={handleSwitchChange} />
 */
export const SwitchUI = forwardRef<HTMLButtonElement, SwitchProps>(
  (props, ref) => {
    return <Switch {...props} ref={ref} />;
  }
);

/**
 * A custom labelled switch component.
 *
 * @param {LabelledSwitchUIProps} props - The props for the LabelledSwitchUI component.
 * @param {React.Ref<HTMLButtonElement>} ref - The ref for the button element.
 * @returns {JSX.Element} The rendered LabelledSwitchUI component.
 *
 * @component
 * @example
 * // Usage:
 * <LabelledSwitchUI label="Label" switchProps={{ checked: true }} />
 */
export const LabelledSwitchUI = forwardRef<
  HTMLButtonElement,
  LabelledSwitchUIProps
>(({ label, switchProps }, ref) => {
  return (
    <FormControlLabel
      label={label}
      ref={ref}
      control={<SwitchUI {...switchProps} />}
    />
  );
});

/**
 * A custom controlled switch component.
 *
 * @param {ControlledSwitchUIProps} props - The props for the ControlledSwitchUI component.
 * @param {React.Ref<HTMLButtonElement>} ref - The ref for the button element.
 * @returns {JSX.Element} The rendered ControlledSwitchUI component.
 *
 * @component
 * @example
 * // Usage:
 * <ControlledSwitchUI control={control} name="switch" switchProps={{ checked: true }} />
 */
export const ControlledSwitchUI = forwardRef<
  HTMLButtonElement,
  ControlledSwitchUIProps
>(({ control, name, switchProps }, ref) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <SwitchUI
          {...switchProps}
          ref={ref}
          onChange={(e) => field.onChange(e.target.checked)}
          checked={field.value}
        />
      )}
    />
  );
});

/**
 * A custom controlled labelled switch component.
 *
 * @param {ControlledLabelledSwitchUIProps} props - The props for the ControlledLabelledSwitchUI component.
 * @param {React.Ref<HTMLButtonElement>} ref - The ref for the button element.
 * @returns {JSX.Element} The rendered ControlledLabelledSwitchUI component.
 *
 * @component
 * @example
 * // Usage:
 * <ControlledLabelledSwitchUI control={control} name="switch" label="Label" switchProps={{ checked: true }} />
 */
export const ControlledLabelledSwitchUI = forwardRef<
  HTMLButtonElement,
  ControlledLabelledSwitchUIProps
>(({ control, label, name, switchProps }, ref) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <LabelledSwitchUI
          switchProps={{
            ...switchProps,
            checked: field.value,
            onChange: (e) => field.onChange(e.target.checked),
          }}
          label={label}
          ref={ref}
        />
      )}
    />
  );
});
