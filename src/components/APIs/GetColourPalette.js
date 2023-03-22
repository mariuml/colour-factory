import $ from "jquery";
import { colourSelection } from "../Buttons/MoodButton";
import { userColor } from "../ColorPicker";

// Global variables
var mode = "analogic";
var numberOfColours = "5";

// Function to get an API response from the Colours API
function GetColour() {
  console.log(userColor)
  var queryURL =
    "https://www.thecolorapi.com/scheme?hex=" +
    colourSelection +
    "$hsl=" +
    userColor[0] + "," + userColor[1] + "%," + userColor[2] + "%" +
    "&mode=" +
    mode +
    "&count=" +
    numberOfColours;
    console.log(queryURL)
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    $("#paletteDisplay").attr("src", response.image.named);
  });

  return (
    <div>
      <h1> Here is your colour palette!</h1>
      <img alt="pallete display" src="" id="paletteDisplay"></img>
    </div>
  );
}

export default GetColour;
