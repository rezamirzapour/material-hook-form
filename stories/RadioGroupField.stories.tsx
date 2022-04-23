import React from 'react';
import { Meta, Story } from '@storybook/react';
import { RadioGroupField } from '../src';
import { useForm } from 'react-hook-form';
import type { RadioGroupFieldProps } from '../src/types';

const meta: Meta = {
  title: 'RadioGroupField',
  component: RadioGroupField,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<RadioGroupFieldProps> = (args) => {
  const { control } = useForm();
  return (
    <RadioGroupField
      name="Radio"
      label="Radio Field"
      control={control}
      options={[
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
      ]}
      {...args}
    />
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
