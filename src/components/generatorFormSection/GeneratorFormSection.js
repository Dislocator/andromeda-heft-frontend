import React from "react";
import { useSelector } from "react-redux";
import FormikContainer from "../forms/FormikContainer";
import KeywordsForm from "../forms/keywordsForm/KeywordsForm";
import { FormContainer, FormWrapper } from "./FormElements";

const GeneratorFormSection = () => {
  const showGenerator = useSelector((state) => state.ui.generatorForm);
  console.log(showGenerator, "Generator");
  return (
    <FormContainer id="generator-form" showGenerator={showGenerator}>
      <FormWrapper>
        <KeywordsForm />
      </FormWrapper>
    </FormContainer>
  );
};

export default GeneratorFormSection;
