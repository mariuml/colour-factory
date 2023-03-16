import React from "react";
import { hexCode } from "../ColorPicker/ColorPicker";

export default function Header () {

    return (
        <header className="container-fluid d-flex align-items-center justify-content-between" style={{
            width: "100%",
            height: 150,
            backgroundColor: hexCode
        }}>
            <h1>Welcome to colour factory!</h1>
            <button className="btn btn-primary">My saved palettes</button>
        </header>
    )
};