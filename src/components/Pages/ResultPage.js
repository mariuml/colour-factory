import React from "react";
import GetColour from "../APIs/GetColourPalette";
import SaveButton from "../Buttons/SaveButton";
import GetStartingColour from "../APIs/GetStartingColour";

import { userColor } from "../ColorPicker"


export default function ResultPage() {
  return (
    <div className="font">
      <h1>Results</h1>
      <h2>{userColor}</h2>
      {/* Starting colour GET request displayed below */}
      <GetStartingColour />

      {/* Colour palette displayed  below */}
      <GetColour />

      <SaveButton />
    </div>
  );
}
