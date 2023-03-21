import React from "react";
import Button from "@mui/material/Button";

function SaveButton() {
  return (
    <Button
      variant="outlined"
      className="m-3"
      sx={{ color: "rgb(89, 192, 154)", borderColor: "rgb(89, 192, 154)" }}
    >
      Save Palette
    </Button>
  );
}

export default SaveButton;
