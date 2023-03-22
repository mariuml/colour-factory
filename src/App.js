import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import ColorSelectionPage from "./components/ColorSelectionPage";
import ResultPage from "./components/ResultPage";


// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="ColorSelectionPage" element={<ColorSelectionPage />} />
            <Route
              path="ResultPage"
              element={<ResultPage />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
