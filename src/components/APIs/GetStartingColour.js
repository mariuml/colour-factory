import React from 'react';
import $ from "jquery";
import { userChosenColour } from "../Pages/ColorSelectionPage";

export let mainColour;

// Global variables
var mode = "analogic";


function GetStartingColour() {
    var queryURL =
    "https://www.thecolorapi.com/id?" +
    userChosenColour +
    "&mode=" +
    mode;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    mainColour = response.name.value;
    $("#startingColourDisplay").attr("src", response.image.named);
  });

  return (
    <div>
      <h1> Here is your chosen starting colour</h1>
      <img alt="starting colour display" src="" id="startingColourDisplay"></img>
    </div>
  )
}

export default GetStartingColour
