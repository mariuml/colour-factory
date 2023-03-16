import React from "react";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import MoodButton from "./components/Buttons/MoodButtons";

function App() {
  return (
    <div className="App">
     <h1> The Colour Factory </h1>
     <ColorPicker />

    <MoodButton />
    </div>
  );
}

export default App;
