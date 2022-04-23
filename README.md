# Material Hook Form

material-hook-form is a set of wrapper components that intergrate material ui form elements with react-hook-form v7. so you don't need waste your time anymore to intergrate material ui form elements with react-hook-form v7.

## Install

    npm i @rezamirzapour/material-hook-form

## Usage

```jsx
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  TextField,
  SelectField,
  RadioGroupField,
} from '@rezamirzapour/material-hook-form';
import { Grid, Button } from '@mui/material';

const schema = yup.object().shape({
  title: yup.string().required('title is required'),
  categories: yup.array().of(yup.number()),
  status: yup.string(),
});

function App() {
  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid lg={6} spacing={3} item container>
          <Grid item lg={12}>
            <TextField name="title" label="The Title" control={control} />
          </Grid>
          <Grid item lg={12}>
            <SelectField
              name="categories"
              label="The Categories"
              control={control}
              multiple
              options={categories.map((c: any) => ({
                label: c.title,
                value: c.id,
              }))}
            />
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <RadioGroupField
            name="status"
            label="The Status"
            control={control}
            options={[
              {
                label: 'Save as published',
                value: 'publsihed',
              },
              {
                label: 'Save as draft',
                value: 'unpublsihed',
              },
            ]}
          />
        </Grid>
        <Grid item lg={12}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <Button variant="contained" color="secondary">
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
```
