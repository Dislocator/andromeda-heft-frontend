import { Formik, Form } from "formik";
import React from "react";
import * as yup from "yup";
import { H1 } from "../../../theme/Fonts";
import { Button, FormButton } from "../../buttons/ButtonElements";
import KeywordsField from "./KeywordsField";
import { FormControl, FormH1 } from "./KeywordsFormElements";
import { animateScroll as scroll, Link } from "react-scroll";

const KeywordsForm = () => {
  const initialValues = { keywords: [] };
  const validationSchema = yup.object({
    keywords: yup.array().of(
      yup.object().shape({
        name: yup.string().required("Keyword required"),
      })
    ),
  });

  const onSubmit = (values) => {
    console.log("hi");
  };

  const handleScroll = () => {
    scroll.scrollTo("about");
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values)}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <FormH1>Enter Keywords</FormH1>
        <Form>
          <KeywordsField label="Enter Keywords" name="keywords" />
          <FormControl>
            <FormButton type="submit">
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                asd
              </Link>
            </FormButton>
          </FormControl>
        </Form>
      </div>
    </Formik>
  );
};

export default KeywordsForm;
