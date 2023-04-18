import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import ListNodeComponent from "./ListNodeComponent";
import ListUserComponent from "./ListNodeComponent";
import TakMap from "./TakMap";

export default function CyberDashBoard() {
  const navigate = useNavigate();

  function handleCyberdashNetworkMap(e) {
    e.preventDefault();
    navigate("/CyberdashNetworkMap");
  
  }
  function handleNetworkStatistics(e) {
    e.preventDefault();
    navigate("/CyberdashNetworkStat");
  }


  function handleTAKMap(e) {
    e.preventDefault();
    navigate("/Cyberdashboard");
  }

  function handleAssessmentDashBoard(){
    navigate("/AssessmentDash");
  }

  function handleAddNode(){
    navigate("/CustomizeNode");
  }

  function handleNetworkVulnerabilities(e) {
    e.preventDefault();
    navigate("/CyberdashNetworkVul");
  }

  // menubar selection

  const options = [
    { value: "networkMap", label: "NetworkMap" },
    { value: "networkState", label: "Network Statistic" },
    { value: "networkStat", label: "Network Volume" },
    { value: "TAKmap", label: "TAK Map" },
  ];

  function handleMenu(e){
    e.preventDefault();
    console.log("e.value");
  }

  return (
    <body>
  <header id="mainNav">
      <h2 id="naive">Naive</h2>
      <button id="pressedTab">Cyber VA</button> 
      <button id="assessmentDash" onClick={handleAssessmentDashBoard}>Assessment Dashboard</button>
  </header>


    <div class="content-container">
      
      

    </div>

  <TakMap>

  </TakMap>

    <div id="footer">
      <button id="quit">Quit</button> 
      <button id="settings">Settings</button>
      <button id="networkMap" onClick={handleCyberdashNetworkMap}> Network Map </button>
      <button id="networkStatistics" onClick={handleNetworkStatistics}> Network Stat </button>
      <button id="networkVulnerabilities" onClick={handleNetworkVulnerabilities}> Network Vul. </button>
      <button id="pressedTAKmap"> TAK Map </button>
      <button id="addNode" onClick={handleAddNode}>Add Node</button>
      <button id="deleteNode">Delete Node</button>
      {/* <!-- onclick={handleQuit} --> */}
    </div>
</body>
  );
}
