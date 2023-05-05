import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
<<<<<<< HEAD
=======
import VulnerabilityInfo from "../cyberDash/VulnerabilityInfo";
>>>>>>> Backend

export default function AssessmentDash() {
  const navigate = useNavigate();

  function handleMainDashBoard(e) {
    e.preventDefault();
    navigate("/MainDash");
  
  }
  function handleCyberdashNetworkMap(e) {
    e.preventDefault();
    navigate("/CyberdashNetworkMap");
  }

  function handleAssessmentDashBoard(){
    navigate("/AssessmentDash");
  }

  function handleAddNode(){
    navigate("/CustomizeNode");
  }

<<<<<<< HEAD
=======
  function handleBack(event) {
    navigate("/");
  }

>>>>>>> Backend
  function handleEnvironmentalInfo(){
    navigate("/EnvironmentalInfo");
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
      <button id="cyberVA" onClick={handleCyberdashNetworkMap}>Cyber VA</button> 
      <button id="pressedAssessment">Assessment Dashboard</button>
  </header>

<<<<<<< HEAD

    <div id="footer">
      <button id="quit">Quit</button> 
=======
<VulnerabilityInfo>
  
</VulnerabilityInfo>

    <div id="footer">
      <button id="quit" onClick={handleBack}>Quit</button> 
>>>>>>> Backend
      <button id="settings">Settings</button>
      <button id="pressedNetworkMap"> Vulnerability Info. </button>
      <button id="environmental"onClick={handleEnvironmentalInfo}> Environmental Info. </button>
      <button id="addNode" onClick={handleAddNode}>Add Node</button>
      <button id="deleteNode">Delete Node</button>
      {/* <!-- onclick={handleQuit} --> */}
    </div>
</body>
  );
}
