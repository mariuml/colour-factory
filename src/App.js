import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ResultPage from "./components/ResultPage/ResultPage";

import Header from "./components/Header/Header";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import MoodButton from "./components/Buttons/MoodButtons";
import moods from "./mood-color-data.json"
import GetColour from "./components/GetColour";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route path="SecondPage" element={<SecondPage />} />
          <Route path="SecondPage/ResultPage" element={<ResultPage />} />

        </Routes>
      </Router>
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
