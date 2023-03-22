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
    console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response)
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
