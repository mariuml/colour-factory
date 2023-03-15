import $ from 'jquery';

function GetColour() {
    var hexCode = "0047";
    var mode = "analogic";
    var numberOfColours = "6";

    var queryURL = 
    "https://www.thecolorapi.com/scheme?hex=" + hexCode +
    "&mode" + mode + "&count" + numberOfColours;
    
    $.ajax({
        url: queryURL,
        method: "GET",
        async: false,
      }).then(function (response) {
    
        console.log(response)
    })
    };
    


export default GetColour










