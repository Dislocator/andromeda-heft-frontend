import React, { useState } from "react";
import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { useField } from "formik";

const DateField = ({ label, handleBlur, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [value, setValue] = useState(field.value);
  console.log(meta);
  const handleChange = (newValue) => {
    helpers.setValue(newValue);
  };
  const handleTouched = () => {
    console.log("touched");
  };
  console.log(field);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        inputFormat="dd/MM/yyyy"
        {...field}
        {...props}
        label={label}
        selected={field.value}
        onBlur={handleBlur}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            error={Boolean(meta.error)}
            helperText={meta.touched && meta.error ? `${meta.error}` : " "}
            selected={field.value}
            onBlur={() => helpers.setTouched()}
            fullWidth
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DateField;
