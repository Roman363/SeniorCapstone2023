import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import ListNodeComponent from "./ListNodeComponent";
import ListUserComponent from "./ListNodeComponent";
import NetworkMapV3 from "./NetworkMapV3";

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

  function handleBack(event) {
    navigate("/");
  }

  function handleQuit(e)
  {
    e.preventDefault();
    
  }

  return (
    <body>
  <header id="mainNav">
      <h2 id="naive">Naive</h2>
      <button id="pressedTab">Cyber VA</button> 
      <button id="assessmentDash" onClick={handleAssessmentDashBoard}>Assessment Dashboard</button>
  </header>


    <div class="content-container">
      
      <NetworkMapV3/>

    </div>
 


  <div id="footer">
    <button id="quit" onClick={handleBack}>Quit</button>
    <button id="settings">Settings</button>
    <button id="pressedNetworkMap"> Network Map </button>
    <button id="networkStatistics" onClick={handleNetworkStatistics}> Network Stat </button>
    <button id="networkVulnerabilities" onClick={handleNetworkVulnerabilities}> Network Vul. </button>
    <button id="TAKmap" onClick={handleTAKMap}> TAK Map </button>
    <button id="addNode" onClick={handleAddNode}>Add Node</button>
    <button id="deleteNode">Delete Node</button>
    {/* <!-- onclick={handleQuit} --> */}
  </div>
</body>
  );
}