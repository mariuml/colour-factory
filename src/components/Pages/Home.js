import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import Button from "@mui/material/Button";
import ErrorAlert from "../ErrorAlert";

export let numberOfColors;

export function showUpNumber(element) {
  numberOfColors = element;
}

export default function FirstPage() {
  const navigate = useNavigate();

  // Set state for error Alert
  const [errorAlertPopUp, setPopUp] = useState(false);

  const togglePopUp = () => {
    setPopUp(!errorAlertPopUp);
  };

  const checkInput = () => {
    const colorNum = $("#colorNum").val();

    // Checks if input value is a valid number
    if (isNaN(colorNum) || colorNum > 9 || colorNum < 0 || colorNum === "") {
      togglePopUp();
      return navigate("/");
    } else {
      // Saves user input and exports it.
      numberOfColors = colorNum;
      return navigate("/ColorSelectionPage");
    }
  };

  return (
    <div>
      {/* Description of how the app works */}
      <div id="howTo" className="text-center p-5">
        <h2>How It Works</h2>
        <p>
          1. Select the number of colours for the palette. Click Next.
          <br />
          2. Select a colour from the mood buttons or the colour picker. Click
          Next.
          <br />
          3. View results and save the palette.
        </p>
      </div>
      <div className="container-fluid">
        {/* Input for number of palette colours */}
        <h3 className="text-center p-2">
          How many colours would you like in your palette?
        </h3>
        <input id="colorNum" className="d-flex m-auto"></input>

        {/* If errorAlertPopUp is true, alert will pop up */}
        {/* toggle attribute adds functionality to 'X' */}
        {errorAlertPopUp && (
          <ErrorAlert
            toggle={togglePopUp}
            message="Looks like you forgot to specify the number of colours for your palette."
          />
        )}
      </div>

      {/* Next button */}
      <div className="d-flex p-4">
        <Button className="nextButton m-auto px-5" onClick={checkInput}>
          Next&#187;
        </Button>
      </div>
    </div>
  );
}
