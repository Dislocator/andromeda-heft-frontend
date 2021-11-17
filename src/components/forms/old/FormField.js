import { MenuItem, TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

const FormField = ({ label, data, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error ? `${meta.error}` : " "} //" " equalizes spacing if no error
    >
      {data
        ? data.map((profession) => (
            <MenuItem value={profession}>{profession}</MenuItem>
          ))
        : null}
    </TextField>
  );
};

export default FormField;
