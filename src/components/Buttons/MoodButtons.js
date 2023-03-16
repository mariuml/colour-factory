import React from "react";
import Button from "@mui/material/Button";

function MoodButton() {
  return (
    <div className="moodButton">
      {" "}
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}

export default MoodButton;
