import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DeleteProject() {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");

  function handleDelete(event) {
    event.preventDefault();
    console.log(fileName);
    if (fileName !== "") {
      alert(fileName + " has been successfully deleted");
      navigate("/");
    }
  }

  function handleBack(event) {
    navigate("/");
  }

  function handleChange(e) {
    setFileName(e.target.value);
    console.log(e.target.value);
  }

  function FileDropdown() {
    return (  
    <select onChange={handleChange} defaultChecked>
      <option key="project1" value="project1">
        project1
      </option>
      <option key="project2" value="project2">
        project2
      </option>
      <option key="project3" value="project3">
        project3
      </option>
      <option key="project4" value="project4">
        project4
      </option>
      <option key="project5" value="project5">
        project5
      </option>
      <option key="project6" value="project6">
        project6
      </option>
    </select>
    );
  }
  return (
    <body>
    <header id="mainNav">
        <h2 id="delete">Delete NAIVE Projects</h2>
        {/* <!-- <a href="" id="cyberVA">Cyber VA</a>
        <a href="" id="assessmentDash">Assessment Dashboard</a> --> */}
    </header>


    <form>
      <div class="content-container">
        <div class="delete">
        
        <div>
          <label>
            Select Project:
            <br />
            <FileDropdown id="FileDropdown" name="project" value={fileName} />
            
          </label>

          <button type="submit" onClick={handleDelete}>Delete</button>
          <button onClick={handleBack}>Back</button>
        </div>
        </div>
      </div>
    </form>


    <div id="footer">
      <button id="quit">Quit</button> 
      {/* onclick={handleQuit} */}
    </div>
</body>

    
  );
}
