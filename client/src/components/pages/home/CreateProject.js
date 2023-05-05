import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
export default function CreateProject() {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setFileName(e.target.value);
  }
=======
import axios from "axios";

function MyComponent() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text == ""){
      alert("Project name is empty");
      return
    } 
    if(text == "Projects"){
      alert('Project can'+'t be named "Projects"');
      return
    }
    
    const formData = new FormData();
    formData.append("text", text);
    formData.append("file", file);

    axios.post("http://127.0.0.1:5000/createTable", formData).then((response) => {
      console.log(response.data);
    });

    navigate('/cyberdashboard');
  };


  return (
    <form onSubmit={handleSubmit}>

      <input type="text" placeholder="Project Name" value={text} onChange={handleTextChange} />
      <br/>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Enter</button>
    </form>
  );
}

export default function CreateProject() {

  const navigate = useNavigate();
>>>>>>> Backend

  function handleBack(event) {
    navigate("/");
  }

<<<<<<< HEAD
  function handleSubmit(event) {
    event.preventDefault();
    console.log(fileName);
    if (fileName !== "") {
      alert("Rollup created Successfully!");

      navigate("/CyberdashNetworkMap");

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
=======

  return (
  <body>
      <header id="mainNav">
          <h2 id="create">Create NAIVE Project</h2>
          {/* <!-- <a href="" id="cyberVA">Cyber VA</a>
          <a href="" id="assessmentDash">Assessment Dashboard</a> --> */}
      </header>

      <div class="content-container">
        <label>Enter project name</label>
        <MyComponent/>
        <button type="back" onClick={handleBack}>Back</button>
      </div>
      <div id="footer">
          <button id="quit" onClick={handleBack}>Quit</button>     
      </div>
  </body>
>>>>>>> Backend
  );
}
