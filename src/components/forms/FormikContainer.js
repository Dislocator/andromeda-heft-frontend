import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import TagsField from "./InputFields/TagsField/TagsField";
import MultistepForm, { FormStep } from "./MultistepForm";
const FormikContainer = () => {
  const initialValues = {
    email: "",
    learningStartDate: null,
    keyword: "",
    keywords: [{ name: "kekw" }],
  };
  const validationSchema = yup.object({
    email: yup.string().email("unvalid email").required("email required"),
    learningStartDate: yup
      .date("unvalid date")
      .nullable()
      .required("learningStartDate is required"),
    keywords: yup.array().of(
      yup.object().shape({
        name: yup.string().required("keyword required"),
      })
    ),
  });
  const onSubmit = (values) => console.log("Form data", values);
  return (
    <MultistepForm
      initialValues={initialValues}
      //   validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <FormStep stepName="Personal" validationSchema={validationSchema}>
        <FormikControl control="input" label="Email" name="email" />

        <FormikControl
          control="date"
          label="Start Date"
          name="learningStartDate"
        />
        <FormikControl control="tags" label="Keywords" name="keywords" />
      </FormStep>
    </MultistepForm>
  );
};

export default FormikContainer;
