import React from "react";
import Button from "@mui/material/Button";
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
    <div className="moodButton">
      {" "}
      <Button
        variant="contained"
        onClick={setColour}
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

  // On click, return colour to the console
  

}

export default MoodButton;
