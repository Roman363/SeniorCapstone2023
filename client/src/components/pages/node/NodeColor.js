import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

function NodeColor() {
  const navigate = useNavigate();

  const options = [
    { value: "black", label: "black" },
    { value: "white", label: "white" },
    { value: "red", label: "red" },
    { value: "green", label: "green" },
    { value: "yellow", label: "yellow" },
    { value: "blue", label: "blue" },
    { value: "purple", label: "purple" },
  ];

  function handleSubmit(e) {
    e.preventDefault();

  }

  function handleBack(event) {
    navigate('/CustomizeNode');
 }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Choose a Color</h3>

      <Select options={options}
      ></Select>

      <button type="submit">Save</button>
      <button onClick={handleBack} >Back</button>
    </form>
  );
}

export default NodeColor;
