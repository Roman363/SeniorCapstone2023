import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  
  function handleCreate() {
    navigate("/BrowseProject");
  };
  function handleOpen() {
    navigate("/OpenProject");
  };
  function handleDelete() {
    navigate("/DeleteProject");
  };

  return (
    <form >
      <div className="App">
        <div className="box-container">
          <h2>Naive</h2>
          <div className="button-container">
            <div className="content-container">
              <label>Please enter user initials</label>
              <input
                type="text"
                id="UserInitial"
                placeholder="User Initials"
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
  );
}

export default Home;
