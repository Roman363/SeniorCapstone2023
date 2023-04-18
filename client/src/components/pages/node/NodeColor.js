import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

function NodeColor() {
  const navigate = useNavigate();

  const options = [
    { value: "black", label: "black" },
    { value: "white", label: "white" },
    { value: "red", label: "red" },
    { value: "green", label: "green" },
    { value: "yellow", label: "yellow" },
    { value: "blue", label: "blue" },
    { value: "purple", label: "purple" },
  ];

  function handleSubmit(e) {
    e.preventDefault();

  }

  function handleBack(event) {
    navigate('/CustomizeNode');
 }

  return (
<body>
    <header id="mainNav">
        <h2 id="color">Choose A Color</h2>
        {/* <!-- <a href="" id="cyberVA">Cyber VA</a>
        <a href="" id="assessmentDash">Assessment Dashboard</a> --> */}
    </header>


    <form onSubmit={handleSubmit}>
      <div class="content-container">
        

        <Select options={options}
        ></Select>

        <button type="submit">Save</button>
        <button onClick={handleBack} >Back</button>
      </div>
    </form>

    <div id="footer">
        <button id="quit">Quit</button> 
        {/* onclick={handleQuit} */}
      </div>
</body>
  );
}

export default NodeColor;
