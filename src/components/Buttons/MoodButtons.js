import React from "react";
import Button from "@mui/material/Button";

function MoodButton(props) {
  return (
    <div className="moodButton">
      {" "}
      <Button variant="contained" style={{backgroundColor:props.color, borderRadius:12}}>{props.name}</Button>
    </div>
  );
}

export default MoodButton;
