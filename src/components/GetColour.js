import $ from "jquery";
import { colourSelection } from "./Buttons/MoodButton";
import { numberOfColors } from "./Home";

// Global variables


let mode = "analogic";


// Function to get an API response from the Colours API
function GetColour() {
  var queryURL =
    "https://www.thecolorapi.com/scheme?hex=" +
   colourSelection +
    "&mode=" +
    mode +
    "&count=" +
    numberOfColors;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
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
