import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import ListNodeComponent from "./ListNodeComponent";
import ListUserComponent from "./ListNodeComponent";
import TakMap from "./TakMap";

export default function CyberDashBoard() {
  const navigate = useNavigate();

  function handleMainDashBoard(e) {
    e.preventDefault();
    navigate("/MainDash");
  
  }
  function handleCyberdashBoard(e) {
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

  function handleMenu(e){
    e.preventDefault();
    console.log("e.value");
  }

  return (
    <body>
  <header id="mainNav">
      <h2 id="naive">Naive</h2>
      <button id="cyberVA" onClick={handleCyberdashBoard}>Cyber VA</button> 
      <button id="assessmentDash" onClick={handleAssessmentDashBoard}>Assessment Dashboard</button>
  </header>


    <div class="content-container">
      

    </div>

  <TakMap>

  </TakMap>

    <div id="footer">
      <button id="quit">Quit</button> 
      <button id="settings">Settings</button>
      <button id="networkMap"> Network Map </button>
      <button id="networkStat"> Network Stat </button>
      <button id="networkVul"> Network Vul. </button>
      <button id="TAKmap"> TAK Map </button>
      <button id="addNode" onClick={handleAddNode}>Add Node</button>
      <button id="deleteNode">Delete Node</button>
      {/* <!-- onclick={handleQuit} --> */}
    </div>
</body>
  );
}
