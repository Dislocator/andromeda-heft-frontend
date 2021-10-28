import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import React from "react";
import { useField } from "formik";

const DatePicker = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log(field);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        inputFormat="MM/dd/yyyy"
        renderInput={(params) => (
          <TextField
            {...params}
            {...field}
            {...props}
            label={label}
            helperText={meta.touched && meta.error}
            error={meta.touched && Boolean(meta.error)}
          />
        )}
        onChange={(val) => helpers.setValue(val)}
        margin="normal"
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
