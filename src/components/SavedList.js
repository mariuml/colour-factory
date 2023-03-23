import React from "react";
import {showUp} from './Pages/ColorSelectionPage';
import Button from "@mui/material/Button";



function showSaved(event) {
    const target = event.target.getAttribute("data-name")
    showUp(target)
  };

export default function SavedList(props) {

    return (
        <tr className="text-center">
            <td>{props.name}</td>
            <td>{props.num}</td>
            <td>{props.time}</td>
            <td><Button onClick={showSaved} data-name={props.colour} href="/ResultPage">Show</Button></td>
        </tr>
    )
};