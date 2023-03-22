import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Pages/Header";
import Home from "./components/Pages/Home";
import ColorSelectionPage from "./components/Pages/ColorSelectionPage";
import ResultPage from "./components/Pages/ResultPage";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
