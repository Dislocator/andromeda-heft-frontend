import React from "react";
import DatePicker from "./old/DatePicker";
import InputField from "./InputFields/InputField/InputField";
import DateField from "./InputFields/DateField/DateField";
import TagsField from "./InputFields/TagsField/TagsField";
import SchoolDaysField from "./InputFields/SchoolDaysField/SchoolDaysField";
import LessonsField from "./InputFields/SchoolDaysField/LessonsField";
// import DatePicker from "./InputFields/DatePicker/DatePicker";

const FormikControl = (props) => {
  const { control, ...args } = props;
  switch (control) {
    case "input":
      return <InputField {...args} />;
    case "textarea":
    case "select":
    case "radio":
    case "checkbox":
    case "date":
      return <DateField {...args} />;
    case "lessons":
      return <LessonsField {...args} />;
    case "tags":
      return <TagsField {...args} />;
    case "schoolDays":
      return <SchoolDaysField {...args} />;
    default:
      return null;
  }
};

export default FormikControl;
