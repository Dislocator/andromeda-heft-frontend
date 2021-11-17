import React from "react";
import { FieldArray, Formik } from "formik";
import { Button, Stack, TextField } from "@mui/material";
import * as yup from "yup";
import FormField from "../FormField";
import MultistepForm, { FormStep } from "./MultistepForm";
import { Box } from "@mui/system";
import FormSelect from "../FormSelect";
import DatePicker from "../DatePicker";
import KeywordsForm from "../keywords/KeywordsForm";
import SchoolInfoForm from "../../schoolInfo/SchoolInfoForm";
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
  learningStartDate: yup.date().required("learningStartDate is required"),
  learningFinishDate: yup.date().required("learningFinishDate is required"),
});
const validationSchemaProfession = yup.object({
  keywords: yup.array().nullable(),
});

const RegisterForm = () => {
  return (
    <>
      <MultistepForm
        initialValues={{
          firstName: "a",
          lastName: "a",
          email: "a",
          profession: "prof1",
          company: "a",
          chiefName: "a",
          keyword: "a",
          keywords: [""],
          subjects: [""],
          learningStartDate: new Date(),
          learningFinishDate: new Date(),
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <FormStep stepName="Personal" validationSchema={validationSchema}>
          <Stack
            spacing={3}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <FormField name="firstName" label="Name" />
            <FormField name="lastName" label="Lastname" />
            <FormField name="email" label="Email" />
            <FormField name="company" label="Firma" />
            <FormField name="chiefName" label="Ausbilder" />
            <FormField
              name="profession"
              data={professions}
              label="Profession"
              select={true}
            />
            <DatePicker name="learningStartDate" label="Ausbildungsbeginn" />
            <DatePicker name="learningFinishDate" label="Ausbildungsende" />
          </Stack>
        </FormStep>
        <FormStep
          stepName="Personal"
          validationSchema={validationSchemaProfession}
        >
          <KeywordsForm name="keywords" label="keywords" />
        </FormStep>
        <FormStep stepName="SchoolInfo">
          <KeywordsForm name="subjects" label="Fach hinzufügen..." />
        </FormStep>
      </MultistepForm>
    </>
  );
};

export default RegisterForm;
