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
// import InputField from "../InputField/InputField";
const TagsField = ({ label, data, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log(meta, "keywords meta");
  const inputRef = useRef(null);
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
      {(fieldArrayProps) => {
        const { push, remove, form } = fieldArrayProps;
        const { values } = form;
        const { keywords } = values;
        console.log(field, "field");

        // console.log(inputRef.current.value, "ref");
        return (
          <div>
            <TextField
              label={field.name}
              ref={inputRef}
              type="text"
              onKeyDown={(e) =>
                e.key === "Enter"
                  ? (push({ name: e.target.value }), (e.target.value = ""))
                  : e.key === "Tab"
                  ? (push({ name: e.target.value }), (e.target.value = ""))
                  : null
              } // TODO : prevent default, add proper yup validation
            />
            <Grid container>
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
