import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomizeNode(){

    const navigate = useNavigate();

    function handleBack(event) {
        navigate("/");
    }
    function handleColor(event) {
        navigate("/NodeColor");
    }
    function handleImage(event) {
        navigate("/ModifyImage");
    }
    function handleStatus(event) {
        navigate("/");
    }


    return (
        <form >
            <h3>Customize Node</h3>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleColor}>Node Color</button>
          <button onClick={handleImage}>Modify Node Image</button>
          <button onClick={handleStatus}>Specify Node Status</button>

        </form>
    );




}

export default CustomizeNode