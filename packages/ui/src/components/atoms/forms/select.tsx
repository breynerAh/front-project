import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import {
  SelectOptionsProps,
  ControlledSelectUIProps,
  SelectUIProps,
} from "./types";

/**
 * Renders a custom select component.
 *
 * @param {string} name - The name of the select element.
 * @param {Array<SelectOptionsProps>} options - The options to be rendered in the select dropdown.
 * @param {object} menuItemProps - Additional props to be passed to each MenuItem component.
 * @param {object} selectProps - Additional props to be passed to the Select component.
 * @param {React.Ref<HTMLSelectElement>} ref - The ref object to be passed to the Select component.
 * @returns {React.ReactElement} The rendered SelectUI component.
 *
 * @component
 * @example
 * // Usage:
 * <SelectUI
 *   name="mySelect"
 *   options={[
 *     { value: 'option1', label: 'Option 1' },
 *     { value: 'option2', label: 'Option 2' },
 *     { value: 'option3', label: 'Option 3' },
 *   ]}
 *   menuItemProps={{ dense: true }}
 *   selectProps={{ fullWidth: true }}
 * />
 */
export const SelectUI = forwardRef<HTMLSelectElement, SelectUIProps>(
  ({ name, options, menuItemProps, selectProps }, ref) => {
    return (
      <FormControl fullWidth>
        <InputLabel>{selectProps?.label}</InputLabel>
        <Select fullWidth {...selectProps} name={name} ref={ref} size="small">
          {options?.map((option: SelectOptionsProps, index: number) => (
            <MenuItem
              {...menuItemProps}
              key={`select-${index}-${option?.value}`}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
);

/**
 * Renders a custom controlled select component.
 *
 * @param {Control} control - The control object from the useForm hook.
 * @param {Array<SelectOptionsProps>} options - The options to be rendered in the select dropdown.
 * @param {string} name - The name of the select element.
 * @param {object} menuItemProps - Additional props to be passed to each MenuItem component.
 * @param {object} selectProps - Additional props to be passed to the Select component.
 * @param {React.Ref<HTMLSelectElement>} ref - The ref object to be passed to the Select component.
 * @returns {React.ReactElement} The rendered ControlledSelectUI component.
 *
 * @component
 * @example
 * // Usage:
 * <ControlledSelectUI
 *   control={control}
 *   name="mySelect"
 *   options={[
 *     { value: 'option1', label: 'Option 1' },
 *     { value: 'option2', label: 'Option 2' },
 *     { value: 'option3', label: 'Option 3' },
 *   ]}
 *   menuItemProps={{ dense: true }}
 *   selectProps={{ fullWidth: true }}
 * />
 */
export const ControlledSelectUI = forwardRef<
  HTMLSelectElement,
  ControlledSelectUIProps
>(({ control, options, name, menuItemProps, selectProps }, ref) => {
  return (
    <Controller
      render={({ field }) => (
        <SelectUI
          selectProps={{ ...selectProps, ...field }}
          name={name}
          menuItemProps={menuItemProps}
          ref={ref}
          options={options}
        />
      )}
      name={name}
      control={control}
    />
  );
});
