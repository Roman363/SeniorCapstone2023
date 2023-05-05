<<<<<<< HEAD
import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function SpecifyNodeStatusAlert(){

    const navigate = useNavigate();
    const [fileName, setFileName] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setFileName(e.target.value);
    }

    function handleChange(event) {
      event.preventDefault();
      //setFile(event.target.value);
    }

    function handleSubmit(event) {
      event.preventDefault()
      //console.log(file)
    }


    //form to enter the status of the node 
    //include compromised, tagged or if the node is good to go
    return (
        <form onSubmit={handleSubmit}>
          <h3>Node Status </h3>
          
          <h5>Enter Node Status</h5>
          <input
            type="text"
            name="fileInput"
            placeholder="Specify Node Status"
            onChange={handleChange}
          ></input>
          <button type="submit">Enter</button>
        </form>
      );



}
=======
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

function SpecifyNodeStatusAlert() {
  const navigate = useNavigate();

  const options = [
    { value: "status1", label: "status1" },
    { value: "status2", label: "status2" },
    { value: "status3", label: "status3" },
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
        <h2 id="color">Choose A Status</h2>
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

export default SpecifyNodeStatusAlert;
>>>>>>> Backend
