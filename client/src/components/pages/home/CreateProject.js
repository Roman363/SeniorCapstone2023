import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  function handleBack(event) {
    navigate("/");
  }


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
  );
}
