import { Form, Formik } from "formik";
import React, { useState } from "react";
import FormNavigation from "./FormNavigation";

const MultistepForm = ({ children, initialValues, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = React.Children.toArray(children);

  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[currentStep];
  const totalSteps = steps.length;
  const isLastStep = currentStep === totalSteps - 1;
  console.log(isLastStep, currentStep, totalSteps);
  const next = (values) => {
    setSnapshot(values);
    setCurrentStep(currentStep + 1);
  };

  const previous = (values) => {
    setSnapshot(values);
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (values, actions) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }
    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };
  return (
    <div>
      <Formik
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.props.validationSchema}
      >
        {(formik) => (
          <Form>
            {step}
            <FormNavigation
              isLastStep={isLastStep}
              hasPrevious={currentStep > 0}
              onBackClick={() => previous(formik.values)}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultistepForm;

export const FormStep = ({ stepName = "", children }) => children;
