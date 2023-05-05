import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import ListNodeComponent from "./ListNodeComponent";
import ListUserComponent from "./ListNodeComponent";
import NetworkVulnerabilities from "./NetworkVulnerabilities";

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

  function handleNetworkVulnerabilities(e) {
    e.preventDefault();
    navigate("/CyberdashNetworkVul");
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

  // menubar selection

  const options = [
    { value: "networkMap", label: "NetworkMap" },
    { value: "networkState", label: "Network Statistic" },
    { value: "networkStat", label: "Network Volume" },
    { value: "TAKmap", label: "TAK Map" },
  ];

  function handleBack(event) {
    navigate("/");
  }

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

  <NetworkVulnerabilities>

  </NetworkVulnerabilities>

    <div id="footer">
      <button id="quit" onClick={handleBack}>Quit</button>
      <button id="settings">Settings</button>
      <button id="networkMap" onClick={handleCyberdashNetworkMap}> Network Map </button>
      <button id="networkStatistics" onClick={handleNetworkStatistics}> Network Stat </button>
      <button id="pressedNetworkVul" > Network Vul. </button>
      <button id="TAKmap" onClick={handleTAKMap}> TAK Map </button>
      <button id="addNode" onClick={handleAddNode}>Add Node</button>
      <button id="deleteNode">Delete Node</button>
      {/* <!-- onclick={handleQuit} --> */}
    </div>
</body>
  );
}