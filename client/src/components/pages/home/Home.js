import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleCreate() {
    navigate("/CreateProject");
  }
  function handleOpen() {
    navigate("/OpenProject");
  }
  function handleDelete() {
    navigate("/DeleteProject");
  }

  return (
<body>
  <header id="mainNav">
      <h2 id="naive">Naive</h2>
      <button id="cyberVA">Cyber VA</button> 
      <button id="assessmentDash">Assessment Dashboard</button>
  </header>


  <form method="get">
      <div id="App">
        
      </div>
    </form>

    <div id="footer">
      <button id="quit">Quit</button> 
      <button id="settings">Settings</button>
      <button id="addNode">Add Node</button>
      <button id="deleteNode">Delete Node</button>
      
    </div>
</body>
  );
}

export default Home;
