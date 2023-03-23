import React from "react";
import { Alert, AlertTitle } from "@mui/material/";

function ErrorAlert(props) {
  return (
    <Alert
      severity="error"
      style={{ width: "65%" }}
      className="m-auto mt-5 mb-5 text-start"
      onClose={props.toggle}
    >
      <AlertTitle>Error</AlertTitle>
      {props.message}
    </Alert>
  );
}

export default ErrorAlert;
