import $ from "jquery";
import { colourSelection } from "../Buttons/MoodButton";
import { userColor } from "../ColorPicker";
import { numberOfColors } from "../Pages/Home";

// Global variables
let mode = "analogic";


// Function to get an API response from the Colours API
function GetColour() {
  console.log(userColor)
  let queryURL =
    "https://www.thecolorapi.com/scheme?hex=" +
    colourSelection +
    "$hsl=" +
    userColor[0] + "," + userColor[1] + "%," + userColor[2] + "%" +
    "&mode=" +
    mode +
    "&count=" +
    numberOfColors;
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
      <img src="" id="paletteDisplay"></img>
    </div>
  );
}

export default GetColour;
