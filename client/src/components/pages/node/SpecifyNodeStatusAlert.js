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