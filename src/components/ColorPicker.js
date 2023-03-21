import React, { useState } from "react";
// import Colorful from "@uiw/react-color-colorful";
import Wheel from '@uiw/react-color-wheel';
import $ from 'jquery'



export let hexCode = "#59c09a";

export let userColor = "";

function ColorPicker() {

  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 80, a: 1 });
  

  function adjustBrightness(event) {
    const brightness = $("#brightness").val()
    const newValue = hsva
    newValue.v = Number(brightness)
    console.log(newValue)
    setHsva({...hsva, newValue})
  }
  

  let color = "hsl(" + hsva.h + ", " + hsva.s + "%, " + hsva.v +"%)"
  
  console.log(hsva)
  return (
    <div>
      <Wheel
        className="m-auto"
        width={400}
        height={400}
        color={hsva}
        onChange={(color) => {
          setHsva({ ...hsva, ...color.hsva });
        }}
      />
      <label className="d-block">Brightness</label>
      <input onChange={adjustBrightness} id="brightness" type="range"  min="0" max="100"/>
      <div className="d-flex align-items-center justify-content-center mt-3" style={{width: "100%", height: 100, backgroundColor: color, borderRadius: 10}}>
        <h3 id="colorText"> {color} </h3>
      </div>
    </div>
  );

  // <div
  //   style={{
  //     width: "500px",
  //     margin: "auto",
  //     border: "3px solid black",
  //     background: hex,
  //   }}
  // >
  //   <Colorful
  //     style={{ margin: "auto" }}
  //     color={hex}
  //     onChange={(color) => {
  //       setHex(color.hexa);
  //     }}
  //   />
  //   <div style={{ marginTop: 30, padding: 10 }}>{hex}</div>
  // </div>
}

export default ColorPicker;
