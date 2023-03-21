import React from "react";
import GetColour from "./APIs/GetColourPalette";
import SaveButton from "./Buttons/SaveButton";
import GetStartingColour from "./APIs/GetStartingColour";

export default function ResultPage() {
  return (
    <div>
      <h1>Results</h1>

      {/* Starting colour GET request displayed below */}
      <GetStartingColour />

      {/* Colour palette displayed  below */}
      <GetColour />

      <SaveButton />
    </div>
  );
}
