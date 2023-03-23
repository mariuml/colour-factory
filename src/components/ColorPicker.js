import React, { useState } from "react";
import Wheel from '@uiw/react-color-wheel';
import $ from 'jquery'

// CSS
import '../style.css'


export let userColour;

function ColorPicker() {

  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 90, a: 1 });
  
  function adjustBrightness(event) {
    const brightness = $("#brightness").val()
    const newValue = hsva
    newValue.v = Number(brightness)
    setHsva({...hsva, newValue})
  }
  
  const color = "hsl(" + hsva.h + ", " + hsva.s + "%, " + hsva.v +"%)"
  userColour = [];
  userColour.push(hsva.h, hsva.s, hsva.v)

  function selected() {
    const variable = document.querySelectorAll(".mood-btn");
    variable.forEach(e => e.classList.remove('active'))
  }

  return (
    <div>
      <Wheel
        onClick={selected}
        className="m-auto"
        width={400}
        height={400}
        color={hsva}
        onChange={(color) => {
          setHsva({ ...hsva, ...color.hsva });
        }}
      />
      <label className="d-block">Brightness</label>
      <input onChange={adjustBrightness} id="brightness" type="range" min="0" max="100" value={hsva.v}/>
      <div className="d-flex align-items-center justify-content-center mt-3" style={{width: "100%", height: 100, backgroundColor: color, borderRadius: 10}}>
        <h3 id="colorText"> {color} </h3>
      </div>
    </div>
  );
}

export default ColorPicker;
