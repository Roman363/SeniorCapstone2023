import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

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
    <form id="mainDashBoard">
      <h3>NAIVE</h3>
      <h5>File Name</h5>

      <button onClick={handleMainDashBoard}>Main Dashboard</button>
      <button onClick={handleCyberdashBoard}>Cyber VA Dashboard</button>
      <button onClick={handleAssessmentDashBoard}>Assessment Dashboard</button>
      <br />

      {/* menubar */}
      <Select
        options={options}
        onChange={handleMenu}
      />

      <br />

      <button>Add Node</button>
      <button>Settings</button>
      <button>Quit</button>
    </form>
  );
}
