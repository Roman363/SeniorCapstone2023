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

  function handleBack(event) {
    navigate("/");
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(fileName);
    if (fileName !== "") {
      alert("Rollup created Successfully!");
<<<<<<< HEAD
      navigate("/Cyberdashboard");
=======
      navigate("/CyberdashNetworkMap");
>>>>>>> 95c7316d6a984b8c076bc030eb090b0ef3e38a11
    } else {
      alert("Please enter project name");
    }
  }

  return (
<body>
    <header id="mainNav">
        <h2 id="create">Create NAIVE Project</h2>
        {/* <!-- <a href="" id="cyberVA">Cyber VA</a>
        <a href="" id="assessmentDash">Assessment Dashboard</a> --> */}
    </header>


    <form onSubmit={handleSubmit}>
      <div class="content-container">
        <label>Enter project name</label>
        <input
          type="text"
          name="fileInput"
          placeholder="Project Name"
          onChange={handleChange}
        ></input>
        <button type="submit">Enter</button>
        <button onClick={handleBack}>Back</button>
      </div>
    </form>

    <div id="footer">
        <button id="quit">Quit</button> 
        {/* onclick={handleQuit} */}
      </div>
</body>
  );
}
