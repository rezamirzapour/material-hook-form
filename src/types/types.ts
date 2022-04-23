import type {
  StandardTextFieldProps,
  SelectProps,
  RadioGroupProps,
} from '@mui/material';
import type { Control } from 'react-hook-form';

export interface ITextFieldProps
  extends Omit<StandardTextFieldProps, 'variant'> {
  name: string;
  control: Control<any>;
  variant?: 'standard' | 'outlined' | 'filled';
}

interface SelectOption {
  label?: string;
  value: number | string;
}

export interface SelectFieldProps extends SelectProps {
  name: string;
  control: Control<any>;
  label?: string;
  disabled?: boolean;
  options: SelectOption[];
  size?: 'small' | 'medium';
}

export interface RadioOption {
  label?: string;
  value: number | string;
}

export interface RadioGroupFieldProps extends RadioGroupProps {
  name: string;
  control: Control<any>;
  label?: string;
  disabled?: boolean;
  options: RadioOption[];
}
