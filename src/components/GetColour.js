import $ from "jquery";

// Function to get an API response from the Colours API
function GetColour() {
  var hexCode = "FF0000";
  var mode = "analogic";
  var numberOfColours = "5";

  var queryURL =
    "https://www.thecolorapi.com/scheme?hex=" +
    hexCode +
    "&mode=" +
    mode +
    "&count=" +
    numberOfColours;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    // Saving the named palette image to myPalette variable
    // var myPaletteUrl = response.image.named;
    // var paletteDisplay = $("<img id='palette-display'>");
    // paletteDisplay.attr("src", myPaletteUrl);



    $( "#paletteDisplay" ).attr( "src", response.image.named);
  });

  return (
    <div>
      <h1> Here is your colour palette!</h1>
      <img src="" id="paletteDisplay"></img>
    </div>
  );
}

export default GetColour;
