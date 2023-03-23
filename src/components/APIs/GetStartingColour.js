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
    // renders color block for user selected color
    const div = $("<div>");
    const h5 = $("<h5>");
    const p = $("<p>")
    $("#starting-colour").append(div.css("background-color", response.hex.value).css("width", "200").css("height", "70").css("border", "1px solid black").css("text-shadow", "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white").attr("class", "m-auto"))
    div.append(h5.text(response.name.value).attr("class", "text-center"));
    div.append(p.text(response.hex.value))
  });

  return (
    <div>
      <h2> Here is your chosen starting colour</h2>
      <div id="starting-colour" className="m-auto"></div>
    </div>
  )
}

export default GetStartingColour
