import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomizeNode(){

    const navigate = useNavigate();
    const [fileName, setFileName] = useState("");


    function handleChange(e) {
        e.preventDefault();
        setFileName(e.target.value);
    }


    function handleBack(event) {
        navigate(-1);
    }


    return (
        <form onSubmit={handleBack}>
          <h3>Node Color</h3>
          <h3>Modify Node Image</h3>
          <h3>Specify Node Status</h3>
          
          <input
            type="text"
            name="fileInput"
            placeholder="Node Color"
            onChange={handleChange}
            
          ></input>

          <input
            type="text"
            name="fileInput"
            placeholder="Modify Node Image"
            onChange={handleChange}
          ></input>  

          <input
            type="text"
            name="fileInput"
            placeholder="Specify Node Status"
            onChange={handleChange}
          ></input>


          <button type="submit">Back</button>
          <button type="submit">Node Color</button>
          <button type="submit">Modify Node Image</button>
          <button type="submit">Specify Node Status</button>

        </form>
    );




}

export default CustomizeNode