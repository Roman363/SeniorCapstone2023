import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import BrowseProject from "./components/pages/home/BrowseProject";
import CreateProject from "./components/pages/home/CreateProject";
import OpenProject from "./components/pages/home/OpenProject";
import DeleteProject from "./components/pages/home/DeleteProject";
import WorngPath from "./components/pages/WorngPath";
import NetworkMap from "./components/pages/dashBoard/cyberDash/NetworkMap";
import CustomizationsAlerts from "./components/pages/node/CustomizationsAlerts";
import CustomizeNode from "./components/pages/node/CustomizeNode";
import ModifyImage from "./components/pages/node/ModifyImage"
import NodeColor from "./components/pages/node/NodeColor"
import SpecifyNodeStatusAlert from "./components/pages/node/SpecifyNodeStatusAlert";
import PathColor from "./components/pages/node/PathColor";
import MainDashboard from "./components/pages/dashBoard/MainDashBoard";
import Cyberdashboard from "./components/pages/dashBoard/cyberDash/Cyberdashboard";
import AssessmentDash from "./components/pages/dashBoard/assessmentDash/AssessmentDash";
import Demo from "./components/pages/demo";
import NetworkStatistics from "./components/pages/dashBoard/cyberDash/NetworkStatistics";
import NetworkVulnerabilities from "./components/pages/dashBoard/cyberDash/NetworkVulnerabilities";
import ListNodeComponent from "./components/pages/dashBoard/cyberDash/ListNodeComponent";
import DashboardDisplay from "./components/pages/dashBoard/cyberDash/DashboardDisplay";
import Dashboard from "./components/pages/dashBoard/cyberDash/Dashboard";

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
          <Route exact path="/CustomizationsAlerts" element={<CustomizationsAlerts />} />
          <Route exact path="/CustomizeNode" element={<CustomizeNode />} />
          <Route exact path="/ModifyImage" element={<ModifyImage />} />
          <Route exact path="/NodeColor" element={<NodeColor />} />
          <Route exact path="/SpecifyNodeStatusAlert" element={<SpecifyNodeStatusAlert />} />
          <Route exact path="/PathColor" element={<PathColor />} />
          <Route exact path="/NetworkMap" element={<NetworkMap />} />
          <Route exact path="/Cyberdashboard" element={<Cyberdashboard />} />
          <Route exact path="/AssessmentDash" element={<AssessmentDash />} />
          <Route exact path="/MainDash" element={<MainDashboard />} />
          <Route exact path="/Demo" element={<Demo />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/NetworkStatistics" element={<NetworkStatistics />} />
          <Route exact path="/NetworkVulnerabilities" element={<NetworkVulnerabilities />} />
          <Route exact path="/ListNodeComponent" element={<ListNodeComponent/>} />
          <Route exact path="/DashboardDisplay" element={<DashboardDisplay/>} />
          <Route exact path="Dashboard" element={<Dashboard/>} />

          <Route path="*" element={<WorngPath />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
