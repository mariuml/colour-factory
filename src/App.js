import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ColorSelectionPage from "./components/ColorSelectionPage";
import ResultPage from "./components/ResultPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="ColorSelectionPage" element={<ColorSelectionPage />} />
          <Route
            path="ColorSelectionPage/ResultPage"
            element={<ResultPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
