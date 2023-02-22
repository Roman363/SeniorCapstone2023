import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function CustomizationsAlerts(){

    const navigate = useNavigate();
    const [fileName, setFileName] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setFileName(e.target.value);
    }



    //if customizations were approved, an alert will pop up and tell
    //the user that the customizations were done successfully
    function handleSubmit(event) {
        event.preventDefault()
        console.log(fileName)
        if(fileName !== "") {
        alert("Customizations done Successfully!")
        navigate("/")
        }else {
          alert("Customizations not done correctly, try again")
        }
    }

    return(
    <form onSubmit={handleSubmit}>
      <h3>Customizations done successfully</h3>
      
      <input
        type="text"
        name="fileInput"
        placeholder="Customization Alerts"
        onChange={handleChange}
      ></input>
      <button type="submit">Continue</button>
    </form>
        
        


    )



}
