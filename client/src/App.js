import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import BrowseProject from "./components/pages/BrowseProject";
import CreateProject from "./components/pages/CreateProject";
import OpenProject from "./components/pages/OpenProject";
import DeleteProject from "./components/pages/DeleteProject";
import WorngPath from "./components/pages/WorngPath";
import NetworkMap from "./components/pages/NetworkMap";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/CreateProject" element={<CreateProject />} />
          <Route exact path="/BrowseProject" element={<BrowseProject />} />
          <Route exact path="/OpenProject" element={<OpenProject />} />
          <Route exact path="/DeleteProject" element={<DeleteProject />} />
          <Route exact path="/NetworkMap" element={<NetworkMap />} />
          <Route path="*" element={<WorngPath />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
