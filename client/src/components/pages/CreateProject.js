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

  function handleSubmit(e) {
    e.preventDefault();
    // navigate(`/projects/${fileName}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>Create NAIVE Project</div>
      <p>
        Rooleup created <br />
        Successfully
      </p>
      <p>Enter project name</p>
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
