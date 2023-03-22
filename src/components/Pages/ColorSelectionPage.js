import React from "react";
import { NavLink } from "react-router-dom";
import ColorPicker from "../ColorPicker";
import MoodButton from "../Buttons/MoodButton";
import moods from "../../mood-color-data.json";
import Button from "@mui/material/Button";

export default function SecondPage() {
  // Rendering buttons to the page
  return (
    <div className="container-fluid row font">
      <div className="col-6">
        <h2>Select a Mood:</h2>
        <ul className="moodButtonContainer row">
          {moods.map((m) => {
            return <MoodButton key={m.mood} mood={m.mood} color={m.color} />;
          })}
        </ul>
      </div>
      <div className="col-6">
        <h2 className="text-center"> Colour Picker </h2>
        <ColorPicker />
      </div>

      <div>
        <p>Selected Colour:</p>
      </div>

      <NavLink to="/ResultPage">
      <div className="d-flex p-4">
        <Button 
        className="nextButton m-auto px-5"
        >
          Next&#187;
        </Button>
      </div>
      </NavLink>
    </div>
  );
}
