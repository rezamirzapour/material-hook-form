import React from 'react';
import { TextField as MaterialTextField } from '@mui/material';
import { useController } from 'react-hook-form';
import type { ITextFieldProps } from '../types';

export default function TextField({ control, ...rest }: ITextFieldProps) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { error },
  } = useController({
    name: rest.name,
    control,
  });
  return (
    <MaterialTextField
      error={Boolean(error)}
      helperText={error?.message}
      inputRef={ref}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      variant="outlined"
      fullWidth
      {...rest}
    />
  );
}
