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
    <form onSubmit={handleSave}>
      <h3>Modify Network Node Image</h3>
      <input
        type="text"
        name="fileInput"
        placeholder="fileName"
        onChange={handleSave}
      />
      <button type="submit">Save</button>
      <br />
      <button onClick={handleBack}>Back</button>
    </form>
  );
}

export default ModifyImage;
