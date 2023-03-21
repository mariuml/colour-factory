import React from "react";
import { NavLink } from "react-router-dom";
import ColorPicker from "./ColorPicker";
import MoodButton from "./Buttons/MoodButton";
import moods from "../mood-color-data.json";
import NextButton from "./Buttons/NextButton";

export default function ColorSelectionPage() {
  return (
    <div className="container-fluid row">
      <div className="col-6">
        <h3>Select a mood:</h3>
        <div className="moodButtonContainer row">
          {moods.map((m) => {
            return <MoodButton key={m.mood} mood={m.mood} color={m.color} />;
          })}
        </div>
      </div>
      <div className="col-6">
        <h1 className="text-center"> The Colour Factory </h1>
        <ColorPicker />
      </div>

      <NavLink to="./ResultPage">
        <NextButton />
      </NavLink>
    </div>
  );
}
