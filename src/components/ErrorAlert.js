import React from "react";
import { Alert, AlertTitle } from "@mui/material/";

function ErrorAlert(props) {
  return (
    <Alert
      severity="error"
      style={{ width: "65%" }}
      className="m-auto mt-5 mb-5"
    >
      <AlertTitle>Error</AlertTitle>
      {props.message}
    </Alert>
  );
}

export default ErrorAlert;
