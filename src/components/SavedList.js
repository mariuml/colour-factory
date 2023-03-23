import React from "react";
import { Link } from "react-router-dom";

import { showUpNumber } from "./Pages/Home"
import {showUp} from './Pages/ColorSelectionPage';

export default function SavedList(props) {
    
    function showSaved(event) {
        const colour = event.target.getAttribute("data-name")
        showUp(colour)
        const number = event.target.getAttribute("data-number")
        showUpNumber(number)
      };

    return ( 
        <tr className="text-center">
            <td>{props.name}</td>
            <td>{props.num}</td>
            <td>{props.time}</td>
            <td><Link to="/ResultPage" onClick={showSaved} data-name={props.colour} data-number={props.num} href="/ResultPage">Show</Link></td>
        </tr>
    )
};