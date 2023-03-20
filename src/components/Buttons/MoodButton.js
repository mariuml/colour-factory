import React from "react";
import Button from "@mui/material/Button";

function MoodButton(props) {
  let textColor = "#FFFFFF";
  if (props.color[1] === "F") {
    textColor = "#000000";
  }
  return (
    <div className="moodButton">
      {" "}
      <Button
        variant="contained"
        sx={{
          width: 145,
          background: props.color,
          color: textColor,
          borderRadius: 12,
          margin: 1,
          padding: 1,
        }}
      >
        {props.mood}
      </Button>
    </div>
  );
}

export default MoodButton;
