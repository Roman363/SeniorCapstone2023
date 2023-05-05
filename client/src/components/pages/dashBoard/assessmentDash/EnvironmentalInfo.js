import React from "react";
import { useNavigate } from "react-router-dom";
import EnvironmentalInfo from "../cyberDash/EnvironmentalInfoTable.js";
import EnvironmentalInfoTable from "../cyberDash/EnvironmentalInfoTable";

export default function CyberDashBoard() {
  const navigate = useNavigate();

  function handleCyberdashNetworkMap(e) {
    e.preventDefault();
    navigate("/CyberdashNetworkMap");
  
  }
  function handleNetworkStatistics(e) {
    e.preventDefault();
    navigate("/NetworkStatistics");
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


    <div class="content-container">
      
      

    </div>

  <EnvironmentalInfoTable>

  </EnvironmentalInfoTable>

  <div id="footer">
      <button id="quit">Quit</button> 
      <button id="settings">Settings</button>
      <button id="networkMap" onClick={handleAssessmentDashBoard}> Vulnerability Info. </button>
      <button id="pressedEnvironmental"> Environmental Info. </button>
      <button id="addNode" onClick={handleAddNode}>Add Node</button>
      <button id="deleteNode">Delete Node</button>
      {/* <!-- onclick={handleQuit} --> */}
    </div>
</body>
  );
}