import React from "react";
import { Formik } from "formik";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";
import FormField from "../FormField";
import MultistepForm, { FormStep } from "./MultistepForm";
import { Box } from "@mui/system";
import FormSelect from "../FormSelect";
import DatePicker from "../DatePicker";
const professions = ["prof1", "prof2", "prof3"];

const validationSchema = yup.object({
  firstName: yup.string().required("firstName is required"),
  lastName: yup.string().required("lastName is required"),
  email: yup.string().required("email is required"),
  company: yup.string().required("company is required"),
  chiefName: yup.string().required("chiefName is required"),
  profession: yup
    .string()
    .oneOf(professions)
    .required("profession is required"),
  learningStartDate: yup.string().required("learningStartDate is required"),
  learningFinishDate: yup.string().required("learningFinishDate is required"),
});
const validationSchemaProfession = yup.object({
  profession: yup.string().required("profession is required"),
  subject: yup.string().required("subject is required"),
});

const RegisterForm = () => {
  return (
    <>
      <MultistepForm
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          profession: "",
          company: "",
          chiefName: "",
          learningStartDate: "",
          learningFinishDate: "",
          date: new Date("2014-08-18T21:11:54"),
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <FormStep
          stepName="Personal"
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={validationSchema}
        >
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <FormField name="firstName" label="Name" />
            <FormField name="lastName" label="Lastname" />
            <FormField name="email" label="Email" />
            <FormField name="company" label="Firma" />
            <FormField name="chiefName" label="Ausbilder" />
            <FormField name="learningStartDate" label="Ausbildungsbeginn" />
            <FormField name="learningFinishDate" label="Ausbildungsende" />
            <FormField
              name="profession"
              data={professions}
              label="Profession"
              select={true}
            />
            <DatePicker name="date" label="Date" />
          </Box>
        </FormStep>
        <FormStep
          stepName="Personal"
          validationSchema={validationSchemaProfession}
        >
          <FormField name="profession" label="Profession" />
          <FormField name="subject" label="Subject" />
        </FormStep>
      </MultistepForm>
    </>
  );
};

export default RegisterForm;
