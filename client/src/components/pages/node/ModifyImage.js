import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ModifyImage() {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");

//   function handleChange(e) {
//     e.preventDefault();
//     setFileName(e.target.value);
//   }

  function handleBack(event) {
    navigate("/CustomizeNode");
  }

  function handleSave(event) {
    event.preventDefault();
    console.log(fileName);
    if (fileName !== "") {
      alert("Image has been changed Successfully!");
      navigate("/");
    } else {
      alert("Image was not changed successfully, try again");
    }
  }

  return (
<body>
    <header id="mainNav">
        <h2 id="modify">Modify Network Node Image</h2>
        {/* <!-- <a href="" id="cyberVA">Cyber VA</a>
        <a href="" id="assessmentDash">Assessment Dashboard</a> --> */}
    </header>


    <form onSubmit={handleSave}>
      <div class="content-container">
        <input
          type="text"
          name="fileInput"
          placeholder="fileName"
          onChange={handleSave}
        ></input>
        <button type="submit">Save</button>
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

export default ModifyImage;