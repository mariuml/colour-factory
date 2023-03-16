import React from "react"
import { NavLink } from 'react-router-dom';
import ColorPicker from "./ColorPicker";



export default function SecondPage() {
    return (
        <div className="container-fluid row">
            <div className="col-6">
                <h3>
                Select a mood:
                </h3>
                <div><p>mood</p></div>
                <div><p>mood</p></div>
                <div><p>mood</p></div>
                <div><p>mood</p></div>
            </div>
            <div className="col-6">
                <h1 className="text-center"> The Colour Factory </h1>
                <ColorPicker />
            </div>

            <NavLink
                to="./ResultPage"
            >
                Next&gt;&gt;&gt;
            </NavLink>
        </div>
    )
}