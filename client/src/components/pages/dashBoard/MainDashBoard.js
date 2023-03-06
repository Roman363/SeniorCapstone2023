import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

export default function MainDashBoard() {
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

  function handleMenu(e) {
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


  <form>
    <div class="content-container">
        <div class="main">

            <label>
                Select Project
                <br/>
                <iframe
        title="myframe"
        src="https://charts.mongodb.com/charts-team-6-sun-city-software-rsomw/embed/charts?id=63eb0411-505d-4876-887c-f52740c9916f&maxDataAge=3600&theme=dark&autoRefresh=true"
        ></iframe>
                <br />
            </label>

        </div>
    </div>
</form>

    <div id="footer">
      <button id="quit">Quit</button> 
      <button id="settings">Settings</button>
      <button id="addNode" onClick={handleAddNode}>Add Node</button>
      <button id="deleteNode">Delete Node</button>
      {/* <!-- onclick={handleQuit} --> */}
    </div>
</body>
  );
}
