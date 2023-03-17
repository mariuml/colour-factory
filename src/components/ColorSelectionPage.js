import React from "react";
import { NavLink } from "react-router-dom";
import ColorPicker from "./ColorPicker";

export default function SecondPage() {
  return (
    <div className="container-fluid row">
      <div className="col-6">
        <h3>Select a mood:</h3>
        {moods.map((m) => {
          return <MoodButton name={m.mood} color={m.color} />;
        })}
      </div>
      <div className="col-6">
        <h1 className="text-center"> The Colour Factory </h1>
        <ColorPicker />
      </div>

      <NavLink to="./ResultPage">Next&gt;&gt;&gt;</NavLink>
    </div>
  );
}
