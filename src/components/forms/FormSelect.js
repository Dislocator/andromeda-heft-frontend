import { MenuItem, Select, TextField } from "@mui/material";
import { useField } from "formik";
import React, { useState } from "react";

const FormSelect = ({ label, data, ...props }) => {
  const [field, meta] = useField(props);
  const [dropdown, setDropdown] = useState("");
  console.log(field, meta);
  const handleChange = (event) => {
    field.value = event.target.value;
    setDropdown(event.target.value);
  };
  console.log(dropdown);
  //   console.log(data, props);
  return (
    <TextField
      id="outlined-select-currency"
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      margin="normal"
    >
      {data.map((profession) => (
        <MenuItem value={profession}>{profession}</MenuItem>
      ))}
    </TextField>
  );
};

export default FormSelect;
