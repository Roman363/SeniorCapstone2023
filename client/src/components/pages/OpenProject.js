import React from "react";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OpenProject() {
  const navigate = useNavigate();
  const [file, setFile] = useState("");

  function handleCreate(event) {
    event.preventDefault();
    navigate("/CreateProject");
  }

  function handleBack(event) {
    navigate(-1);
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
    <div>
      <Checkbox
        label="Value 1"
        value={checkedOne}
        onChange={handleChangeOne}
      />
      <Checkbox
        label="Value 2"
        value={checkedTwo}
        onChange={handleChangeTwo}
      />
    </div>
    <div>
      <input
        type="text"
        name="fileInput"
        placeholder="D://rollups"
        onChange={handleChange}
      />
      <button type="submit">Browse</button>
      <br />
      <button onClick={handleBack}>Back</button>
      <button onClick={handleCreate}>Create</button>
      </div>
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

