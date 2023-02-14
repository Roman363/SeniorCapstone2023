import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProject() {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setFileName(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(fileName)
    if(fileName !== "") {
    alert("Rollup created Successfully!")
    navigate("/")
    }else {
      alert("Please enter project name")
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <h3>Create NAIVE Project</h3>
      
      <h5>Enter project name</h5>
      <input
        type="text"
        name="fileInput"
        placeholder="Project Name"
        onChange={handleChange}
      ></input>
      <button type="submit">Enter</button>
    </form>
  );
}
