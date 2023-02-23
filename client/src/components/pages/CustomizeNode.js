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
          <button type="submit">Back</button>
          <button type="submit">Node Color</button>
          <button type="submit">Modify Node Image</button>
          <button type="submit">Specify Node Status</button>

        </form>
    );




}

export default CustomizeNode