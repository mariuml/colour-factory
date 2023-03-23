import React from "react";

export default function SavedList(props) {

    function showSaved() {
      
    };
    return (
        <tr key={props.key}>
            <td>{props.name}</td>
            <td className="text-center">{props.num}</td>
            <td>{props.time}</td>
            <td><button onClick={showSaved} data-name={props.colour} href="/ResultPage">Show</button></td>
        </tr>
    )
};