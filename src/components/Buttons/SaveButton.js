import React from "react";
import Button from "@mui/material/Button";

// Variables
import { numberOfColors } from "../Pages/Home";
import { userChosenColour } from "../Pages/ColorSelectionPage";
import { mainColour } from '../APIs/GetStartingColour'

// Gets all localStorage saves
export let saved = JSON.parse(localStorage.getItem("Colour-Factory")) || [];

// Time format
const today = new Date();
const splitDate = String(today).split(" ");
const newDate = splitDate[1]+"-"+splitDate[2]+"-"+splitDate[3]



function SaveButton() {
// Saves Colour palette to local storage
  function save() {
    saved.push([mainColour,userChosenColour,numberOfColors,newDate])
    localStorage.setItem('Colour-Factory', JSON.stringify(saved));
  };

  return (
    <Button
      onClick={save}
      variant="outlined"
      className="m-3"
      sx={{ color: "rgb(89, 192, 154)", borderColor: "rgb(89, 192, 154)" }}
    > 
      Save Palette
    </Button>
  );
}

export default SaveButton;
