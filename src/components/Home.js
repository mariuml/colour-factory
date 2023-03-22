import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import Button from "@mui/material/Button";
import ErrorAlert from "./ErrorAlert";


export let numberOfColors;

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
      // alert("Please input valid number! or something like that")
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
      <h1 className="text-center p-5">Description of how it works</h1>
      <div className="container-fluid">
        <h2 className="text-center p-2">
          How many colours would you like in your palette?
        </h2>
        <input id="colorNum" className="d-flex m-auto"></input>

        {/* If errorAlertPopUp is true, alert will pop up */}
        {errorAlertPopUp && (
          <ErrorAlert message="Looks like you forgot to specify the number of colours for your palette." />
        )}
      </div>
      <div className="d-flex pt-4">
        <Button
          variant="text"
          className="button m-auto px-5"
          onClick={checkInput}
        >
          Next&#187;
        </Button>
      </div>
    </div>
  );
}
