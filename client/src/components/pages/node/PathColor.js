import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function PathColor(){

    const navigate = useNavigate();
    const [fileName, setFileName] = useState("");


    function handleChange(e) {
        e.preventDefault();
        setFileName(e.target.value);
    }


    function handleBack(event) {
        navigate(-1);
    }

    function handleSubmit(event) {
      event.preventDefault()
      //console.log(file)
    }


    return (
        <form onSubmit={handleSubmit}>
          <h3>Choose a Color</h3>
          
          <input
            type="text"
            name="fileInput"
            placeholder="Path Color"
            onChange={handleChange}
            onBack = {handleBack}
          ></input>
          <button type="submit">Save</button>
          <button type= "submit">Back</button>
        </form>
    );







}

export default PathColor