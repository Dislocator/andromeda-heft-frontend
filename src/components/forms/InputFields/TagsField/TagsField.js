import {
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Chip,
} from "@mui/material";
import { Field, FieldArray, useField } from "formik";
import React, { useRef } from "react";

const TagsField = ({ label, data, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log(meta, "keywords meta");
  const inputRef = useRef(null);
  const handleSubmit = (e, push) => {
    if (e.key === "Enter") {
      push({ name: e.target.value });
      e.target.value = "";
      e.preventDefault();
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
      {(fieldArrayProps) => {
        const { push, remove, form } = fieldArrayProps;
        const { values } = form;
        const { keywords } = values;
        return (
          <div>
            <TextField
              helperText={meta.touched && meta.error ? `${meta.error}` : " "}
              label={field.name}
              ref={inputRef}
              type="text"
              onKeyPress={(e) => handleSubmit(e, push)}
            />
            <Grid container spacing={1}>
              {field.value.map((_, index) => (
                <Grid item>
                  <Chip
                    name={`${field.name}[${index}]`}
                    label={`${field.value[index].name}`}
                    onDelete={() => remove(index)}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        );
      }}
    </FieldArray>
  );
};

export default TagsField;
