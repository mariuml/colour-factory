import React from "react";
import { useNavigate } from "react-router-dom";
import ColorPicker from "../ColorPicker";
import MoodButton from "../Buttons/MoodButton";
import moods from "../../mood-color-data.json";
import Button from "@mui/material/Button";

// Importing color picker and mood button value;
import { colourSelection } from '../Buttons/MoodButton'
import { userColour } from '../ColorPicker'


export let userChosenColour;


export default function SecondPage() {
  // Rendering buttons to the page
  const navigate = useNavigate();

  function checkResult() {

    let isItMoodButton = false
    const variable = document.querySelectorAll(".mood-btn");
  
    variable.forEach(e => {
      if (e.classList.contains('active')) {
        isItMoodButton = true;
      };

      if (isItMoodButton) {
        userChosenColour = "hex=" + colourSelection;
      } else {
        userChosenColour = "hsl=" + userColour[0] + "," + userColour[1] + "%," + userColour[2] + "%"
      };
    });


    return navigate("/ResultPage");
  }

  return (
    <div className="container-fluid row">
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

      <div className="d-flex p-4">
        <Button
          onClick={checkResult}
          className="nextButton m-auto px-5"
        >
          Next&#187;
        </Button>
      </div>
    </div>
  );
}
