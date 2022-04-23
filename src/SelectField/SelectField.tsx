import React from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useController } from 'react-hook-form';
import type { SelectFieldProps } from '../types';

export default function SelectField({
  name,
  control,
  label,
  disabled,
  options,
  ...rest
}: SelectFieldProps) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl
      disabled={disabled}
      margin={rest.margin}
      error={Boolean(error)}
      size={rest.size}
      variant={rest.variant ?? 'outlined'}
      fullWidth={rest.fullWidth ?? true}
    >
      <InputLabel id={`${name}_label`}>{label}</InputLabel>

      <Select
        labelId={`${name}_label`}
        value={rest.multiple ? (Array.isArray(value) ? value : []) : value}
        onChange={onChange}
        onBlur={onBlur}
        label={label}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
