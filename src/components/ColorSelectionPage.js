import React from "react";
import { useNavigate } from "react-router-dom";

// components
import ColorPicker from "./ColorPicker";
import MoodButton from "./Buttons/MoodButton";
import moods from "../mood-color-data.json";
import Button from "@mui/material/Button";

export default function SecondPage() {

const navigate = useNavigate();

function toResult() {
  return navigate("/ResultPage");
}


  return (
    <div className="container-fluid row">
      <div className="col-6">
      {/* Rendering buttons to the page */}
        <h3>Select a mood:</h3>
        <div className="moodButtonContainer row">
          {moods.map((m) => {
            return <MoodButton key={m.mood} mood={m.mood} color={m.color} 
         />;
          })}
        </div>
      </div>
      <div className="col-6">
        <h1 className="text-center"> The Colour Factory </h1>
        {/* Rendering color picker to the page */}
        <ColorPicker />
      </div>

      <div className="d-flex pt-4">
        <Button
          variant="text"
          className="button m-auto px-5"
          onClick={toResult}
        >
          Next&#187;
        </Button>
      </div>
    </div>
  
  );



 


}
