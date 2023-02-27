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
    <form id="mainDashBoard">
      <h3>NAIVE</h3>
      <h5>File Name</h5>

      <button onClick={handleMainDashBoard}>Main Dashboard</button>
      <button onClick={handleCyberdashBoard}>Cyber VA Dashboard</button>
      <button onClick={handleAssessmentDashBoard}>Assessment Dashboard</button>

      {/* menubar */}
      <Select
        options={options}
        onChange={handleMenu}
      />
      <iframe
        title="myframe"
        src="https://charts.mongodb.com/charts-team-6-sun-city-software-rsomw/embed/charts?id=63eb0411-505d-4876-887c-f52740c9916f&maxDataAge=3600&theme=dark&autoRefresh=true"
        height="500" width="60%" 
      ></iframe>
      <br />

      <button onClick={handleAddNode}>Add Node</button>
      <button>Settings</button>
      <button>Quit</button>
    </form>
  );
}
