import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useController } from 'react-hook-form';
import type { RadioGroupFieldProps } from '../types';

export default function RadioGroupField({
  name,
  control,
  label,
  disabled,
  options,
  ...rest
}: RadioGroupFieldProps) {
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
      margin="normal"
      component="fieldset"
      error={Boolean(error)}
      fullWidth
    >
      <FormLabel component="legend">{label}</FormLabel>

      <RadioGroup
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>

      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
