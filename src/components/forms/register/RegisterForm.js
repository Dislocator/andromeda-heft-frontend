import React from "react";
import { Formik } from "formik";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";
import FormField from "../FormField";
import MultistepForm, { FormStep } from "./MultistepForm";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
});

const RegisterForm = () => {
  return (
    <>
      <MultistepForm
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <FormStep
          stepName="Personal"
          onSubmit={() => alert("hello")}
          validationSchema={validationSchema}
        >
          <FormField name="name" label="Name" />
          <FormField name="email" label="Email" />
        </FormStep>
      </MultistepForm>
    </>
  );
};

export default RegisterForm;
