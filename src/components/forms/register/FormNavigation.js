import { Button } from "@mui/material";
import React from "react";

const FormNavigation = (props) => {
  return (
    <div>
      {props.hasPrevios && (
        <Button variant="contained" onClick={props.onBackClick}>
          Back
        </Button>
      )}

      <Button variant="contained" type="submit" color="primary">
        {props.isLastStep ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

export default FormNavigation;
