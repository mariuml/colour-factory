import React, { useState } from "react";
import Colorful from "@uiw/react-color-colorful";

function ColorPicker() {
  const [hex, setHex] = useState("#59c09a");

  return (
    <div
      style={{
        width: "500px",
        margin: "auto",
        border: "3px solid black",
        background: hex,
      }}
    >
      <Colorful
        style={{ margin: "auto" }}
        color={hex}
        onChange={(color) => {
          setHex(color.hexa);
        }}
      />
      <div style={{ marginTop: 30, padding: 10 }}>{hex}</div>
    </div>
  );
}

export default ColorPicker;
