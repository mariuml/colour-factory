import React from "react";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import GetColour from "./components/GetColour";

function App() {
  return (
    <div className="App">
      <h1> The Colour Factory </h1>
      <ColorPicker />
      <GetColour />

{moods.map((m) => {
  return (
    <MoodButton name={m.name} color={m.color}/>
  )
})}
    
    </div>
  );
}

export default App;
