import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      fullWidth
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

export default FormField;
