import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Field, FieldArray, useField } from "formik";
import React from "react";
import FormField from "../FormField";

const KeywordsForm = ({ label, data, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log(field);
  const handleSubmit = (event) => {
    if (event.keyCode === 13) {
      field.setValue([...field.value, event.target.value]);
    }
  };
  return (
    <FieldArray
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    >
      {({ push, remove }) => (
        <React.Fragment>
          <Typography>{field.name}</Typography>
          <Button onClick={() => push("")}>Add</Button>

          {field.value.map((_, index) => (
            <Grid container item>
              <Grid item>
                <FormField name={`${field.name}[${index}]`} label={label} />
              </Grid>
              <Grid item>
                <Button onClick={() => remove(index)}>Remove</Button>
              </Grid>
            </Grid>
          ))}
        </React.Fragment>
      )}
    </FieldArray>
  );
};

export default KeywordsForm;
