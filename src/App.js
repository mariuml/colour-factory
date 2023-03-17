import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ColorSelectionPage from "./components/ColorSelectionPage";
import ResultPage from "./components/ResultPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="SecondPage" element={<ColorSelectionPage />} />
          <Route path="SecondPage/ResultPage" element={<ResultPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
