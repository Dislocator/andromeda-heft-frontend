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
const SchoolDaysField = ({ label, data, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log(field, "field");
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
            {/* <TextField
              helperText={meta.touched && meta.error ? `${meta.error}` : " "}
              label={field.name}
              type="text"
              onKeyDown={(e) =>
                e.key === "Enter"
                  ? (push({ name: e.target.value }), (e.target.value = ""))
                  : e.key === "Tab"
                  ? (push({ name: e.target.value }), (e.target.value = ""))
                  : null
              }
            /> */}

            {/* <Button onClick={() => push(field.value)}>{"Add Day"}</Button> */}

            <Grid container spacing={2}>
              <Grid item xs={12} spacing={2}>
                <Button onClick={() => push(field.value)}>{"Add day"}</Button>
              </Grid>
              {field.value.map((_, index) => (
                <>
                  <Grid item xs={5}>
                    <TextField
                      fullWidth
                      name={`${field.name[index].day}`}
                      label={`${label.day}`}
                      // value={`${field.value[index].day}`}
                      // onDelete={() => remove(index)}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      name={`${field.name}[${index}].quantity`}
                      label={`${label.frequency}`}
                      // value={`${field.value[index].quantity}`}
                      // onDelete={() => remove(index)}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Button onClick={() => remove(index)}>
                      {"remove day"}
                    </Button>
                  </Grid>
                </>
              ))}
            </Grid>
          </div>
        );
      }}
    </FieldArray>
  );
};

export default SchoolDaysField;
