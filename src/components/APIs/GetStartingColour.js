import React from 'react';
import $ from "jquery";
import { colourSelection } from "../Buttons/MoodButton";

// Global variables
var mode = "analogic";


function GetStartingColour() {
    var queryURL =
    "https://www.thecolorapi.com/id?hex=" +
   colourSelection +
    "&mode=" +
    mode;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $("#startingColourDisplay").attr("src", response.image.named);
  });

  return (
    <div>
      <h1> Here is your chosen starting colour</h1>
      <img src="" id="startingColourDisplay"></img>
    </div>
  )
}

export default GetStartingColour
