import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextField } from '../src';
import { useForm } from 'react-hook-form';
import type { ITextFieldProps } from '../src/types';

const meta: Meta = {
  title: 'TextField',
  component: TextField,
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

const Template: Story<ITextFieldProps> = (args) => {
  const { control } = useForm();
  return (
    <TextField name="text" label="Text Field" control={control} {...args} />
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
