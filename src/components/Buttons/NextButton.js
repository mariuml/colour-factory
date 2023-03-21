import React from "react";
import Button from "@mui/material/Button";

function NextButton() {
  return (
    <Button
      variant="text"
      className="m-3"
      sx={{ color: "rgb(89, 192, 154)" }}
      size="large"
    >
      Next
    </Button>
  );
}

export default NextButton;
