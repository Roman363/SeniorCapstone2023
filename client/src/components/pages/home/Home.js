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
        {/* <a href="" id="cyberVA">Cyber VA</a> Change this when doing the template part 2 with assessment dashboard and VA Dashboard
        <a href="" id="assessmentDash">Assessment Dashboard</a> */}
    </header>


    <form method="get">
        <div id="App">
          <div class="box-container">
            <div class="button-container">
              <div class="content-container">
                <label>Please enter user initials:</label>
                <input
                  type="text"
                  id="UserInitial"
                  placeholder="Ex: J.D"
                ></input>
                <button onClick={handleCreate}>Create Project</button>
                <button onClick={handleOpen}>Open Project</button>
                <button onClick={handleDelete}>Delete Project</button>
              </div>
              <div></div>
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

export default Home;