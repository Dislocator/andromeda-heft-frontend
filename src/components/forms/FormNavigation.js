import { Button } from "@mui/material";
import React from "react";

const FormNavigation = (props) => {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {props.hasPrevious ? (
        <Button variant="contained" type="button" onClick={props.onBackClick}>
          Back
        </Button>
      ) : (
        <div></div>
      )}

      <Button variant="contained" type="submit" color="primary">
        {props.isLastStep ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

export default FormNavigation;
