import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="box-container">
            <text>Naive</text>
            <div className="button-container">
              <div className="content-container">
                <text>Initials</text>
                <input type="text"></input>
              </div>
              <div></div>
            </div>
          </div>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
