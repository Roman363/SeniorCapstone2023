import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OpenProject() {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setFileName(e.target.value);
  }
  function handleOpen(event) {
    event.preventDefault();
    if (fileName !== "") {
      alert(fileName + " has been successfully opened");
      navigate("/");
    }
  }

  function handleBack(event) {
    navigate("/");
  }

  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  return (
    <form>
      <h3>Open NAIVE Project</h3>

      <div>
        <Checkbox
          label="Project 1"
          value={checkedOne}
          onChange={handleChangeOne}
        />
        <br />
        <Checkbox
          label="Project 2"
          value={checkedTwo}
          onChange={handleChangeTwo}
        />
        <br />

        <input
          type="text"
          name="fileInput"
          placeholder="File Name"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleBack}>Back</button>
        <button type="submit" onClick={handleOpen}>
          Open
        </button>
      </div>
    </form>
  );
}

export default OpenProject;

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};
