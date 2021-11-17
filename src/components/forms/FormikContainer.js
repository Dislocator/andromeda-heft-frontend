import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import TagsField from "./InputFields/TagsField/TagsField";
import MultistepForm, { FormStep } from "./MultistepForm";
import { professions } from "../../data/professions";
import { Grid, Paper, Stack } from "@mui/material";
import SchoolDaysField from "./InputFields/SchoolDaysField/SchoolDaysField";
const FormikContainer = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    profession: "",
    companyName: "",
    keywords: [],
    subjects: [],
    learningStartDate: new Date(),
    learningFinishDate: new Date(),
    schoolDays: [],
  };
  const validationSchemaPersonal = yup.object({
    learningStartDate: yup
      .date("unvalid date")
      .nullable()
      .required("learningStartDate is required"),
  });
  const validationSchemaKeywords = yup.object({
    keywords: yup.array().of(
      yup.object().shape({
        name: yup.string().required("keyword required"),
      })
    ),
  });
  const validationSchemaSchool = yup.object({});
  const onSubmit = (values) => console.log("Form data", values);
  return (
    <Paper
      style={{
        marginLeft: "20%",
        marginRight: "20%",
        marginTop: "10%",
        padding: "20px",
      }}
    >
      <MultistepForm
        initialValues={initialValues}
        //   validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <FormStep
          stepName="Personal"
          validationSchema={validationSchemaPersonal}
        >
          <Grid container spacing={4}>
            <Grid item xs={6} spacing={2}>
              <FormikControl control="input" label="Forname" name="firstName" />
              <FormikControl control="input" label="Nachname" name="lastName" />

              <FormikControl
                control="input"
                label="Ausbildungsberuf"
                name="profession"
                data={professions}
                select={true}
              />
              <FormikControl
                control="input"
                label="Firmenname"
                name="companyName"
              />
            </Grid>
            <Grid xs={6} item>
              <FormikControl
                control="date"
                label="Ausbildungbeginn"
                name="learningStartDate"
              />
              <FormikControl
                control="date"
                label="Ausbildungsende"
                name="learningFinishDate"
              />
            </Grid>
          </Grid>
        </FormStep>
        <FormStep
          stepName="Keywords"
          validationSchema={validationSchemaKeywords}
        >
          <FormikControl control="tags" label="Keywords" name="keywords" />
        </FormStep>
        <FormStep stepName="School" validationSchema={validationSchemaSchool}>
          <FormikControl
            control="schoolDays"
            label="School Day"
            name="schoolDays"
          />
        </FormStep>
      </MultistepForm>
    </Paper>
  );
};
export default FormikContainer;
