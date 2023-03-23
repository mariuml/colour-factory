import $ from "jquery";

import { numberOfColors } from "../Pages/Home";
import { userChosenColour } from "../Pages/ColorSelectionPage";

// Global variables
let mode = "analogic";


// Function to get an API response from the Colours API
function GetColour() {
  let queryURL =
    "https://www.thecolorapi.com/scheme?" +
    userChosenColour +
    "&mode=" +
    mode +
    "&count=" +
    numberOfColors;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // renders color blocks from response
    response.colors.forEach(e => {
    const div = $("<div>");
    const h5 = $("<h5>");
    const p = $("<p>")
    $("#colours-container").append(div.css("background-color", e.hex.value).css("width", "200").css("height", "70").css("border", "1px solid black").css("text-shadow", "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white").attr("class", "m-auto"))
    div.append(h5.text(e.name.value).attr("class", "text-center"))
    div.append(p.text(e.hex.value))
    })

  });

  return (
    <div>
      <h2> Here is your colour palette!</h2>
      <div id="colours-container" className="m-auto"></div>
    </div>
  );
}

export default GetColour;
