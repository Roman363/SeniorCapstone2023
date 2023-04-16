import React from "react";
import { useState, useRef } from "react";
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

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log("fileObj is", fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };

  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of another element
    inputRef.current.click();
  };

  function Fileupload() {
    return (
      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
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
                Deleting a Project:
                <div>
                  <Fileupload />

                  <button onClick={handleClick}>Open file to delete</button>
                </div>
              </label>
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
