import React from "react";
import {Button, Tooltip} from "@mui/material/";
// import { startingColour } from "./GetColour";
export let colourSelection = "";

function MoodButton(props) {

// Event handler

const setColour = event => {
   colourSelection = (props.color).substring(1);
 }



// Returning mood buttons
  let textColor = "#FFFFFF";
  if (props.color[1] === "F") {
    textColor = "#000000";
  }

  return (
    <div className="moodButton col-5">
      {" "}
      <Tooltip title={props.color} placement='right-start'>
      <Button
        key={props.mood}
        variant="contained"
        onClick={setColour}
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

  // On click, return colour to the console
  

}

export default MoodButton;
