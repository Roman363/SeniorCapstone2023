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
import CustomizationsAlerts from "./components/pages/CustomizationsAlerts";
import CustomizeNode from "./components/pages/CustomizeNode";
import ModifyImage from "./components/pages/ModifyImage"
import NodeColor from "./components/pages/NodeColor"
import SpecifyNodeStatusAlert from "./components/pages/SpecifyNodeStatusAlert";
import PathColor from "./components/pages/PathColor";

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
          <Route exact path="/CustomizationsAlerts" element={<CustomizationsAlerts />} />
          <Route exact path="/CustomizeNode" element={<CustomizeNode />} />
          <Route exact path="/ModifyImage" element={<ModifyImage />} />
          <Route exact path="/NodeColor" element={<NodeColor />} />
          <Route exact path="/SpecifyNodeStatusAlert" element={<SpecifyNodeStatusAlert />} />
          <Route exact path="/PathColor" element={<PathColor />} />
          <Route exact path="/NetworkMap" element={<NetworkMap />} />
          <Route exact path="/Homer" element={<Home />} />
          <Route path="*" element={<WorngPath />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
