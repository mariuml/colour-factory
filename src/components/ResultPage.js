import React from "react";
import GetColour from "./GetColour";
import SaveButton from "./Buttons/SaveButton";

export default function ResultPage() {
  return (
    <div>
      <h1>Result</h1>
      <GetColour />

      <SaveButton />
    </div>
  );
}
