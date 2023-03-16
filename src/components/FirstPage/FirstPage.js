import React from "react";
import { NavLink } from 'react-router-dom';

export default function FirstPage() {
 return (
    <main>
        <h1 className="text-center p-5">Description of how it works</h1>
        <div className="container-fluid">
            <h2 className="text-center p-2">How many colours would you like in your palette?</h2>
            <input className="d-flex m-auto"></input>
        </div>

        <NavLink
          to="SecondPage"
          end
        >
        Next&gt;&gt;&gt;
        </NavLink>
    </main>
 )
}