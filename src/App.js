import React from "react";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import MoodButton from "./components/Buttons/MoodButtons";
import moods from "./mood-color-data.json"
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
