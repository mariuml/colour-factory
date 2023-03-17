import React from "react";
import { useNavigate } from 'react-router-dom';
import $ from "jquery"
import Button from "@mui/material/Button"

export let numberOfColors = 0;

export default function FirstPage() {
  const navigate = useNavigate();
  // function to check user input
  const checkInput = () => {

    const colorNum = $("#colorNum").val();

    // Chhecks if input value is a valid number
    if (isNaN(colorNum) || colorNum > 9 || colorNum < 0 || colorNum === '') {
      alert("Please input valid number! or something like that")
      return navigate('/')
    } else {
    // Saves user input and exports it.
      numberOfColors = colorNum;
      return navigate('/ColorSelectionPage')
    }

  };

  return (
    <div>
      <h1 className="text-center p-5">Description of how it works</h1>
      <div className="container-fluid">
        <h2 className="text-center p-2">How many colours would you like in your palette?</h2>
        <input id="colorNum"className="d-flex m-auto"></input>
      </div>

      <Button className="btn" variant="text" onClick={checkInput}>Next</Button>
    </div>
  )
};