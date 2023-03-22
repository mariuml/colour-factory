import React from "react";
import { NavLink } from "react-router-dom";
import ColorPicker from "../ColorPicker";
import MoodButton from "../Buttons/MoodButton";
import moods from "../../mood-color-data.json";
import Button from "@mui/material/Button";

export default function SecondPage() {
  // Rendering buttons to the page
  return (
    <div className="container-fluid row">
      <div className="col-6">
        <h2>Select a Mood:</h2>
        <div className="moodButtonContainer row">
          {moods.map((m) => {
            return <MoodButton key={m.mood} mood={m.mood} color={m.color} />;
          })}
        </div>
      </div>
      <div className="col-6">
        <h2 className="text-center"> Colour Picker </h2>
        <ColorPicker />
      </div>

      <NavLink to="./ResultPage">
        <Button className="nextButton m-auto px-5">Next&#187;</Button>
      </NavLink>
    </div>
  );
}
