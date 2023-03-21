import React from "react";
import {Button, Tooltip} from "@mui/material/";

function MoodButton(props) {
  let textColor = "#FFFFFF";
  if (props.color[1] === "F") {
    textColor = "#000000";
  }

  return (
    <div className="moodButton col-5">
      {" "}
      <Tooltip title={props.color} placement='right-end'>
      <Button
        key={props.mood}
        variant="contained"
        sx={{
          width: 145,
          backgroundColor: props.color,
          color: textColor,
          borderRadius: 12,
          margin: 1,
          padding: 1,
        }}
      >
        {props.mood}
      </Button>
      </Tooltip>
    </div>
  );
}

export default MoodButton;
