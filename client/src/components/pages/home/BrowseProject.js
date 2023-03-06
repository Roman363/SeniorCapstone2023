import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function BrowseProject() {
  const navigate = useNavigate();
  const [file, setFile] = useState('');

  function handleCreate(event) {
    event.preventDefault();
    navigate('/CreateProject');
  }

  function handleBack(event) {
    navigate('/');
 }

  function handleChange(event) {
    event.preventDefault();
    setFile(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(file)
  }
  
  return (
    <body>
    <header id="mainNav">
        <h2 id="browse">Browse NAIVE Projects</h2>
        {/* <a href="" id="cyberVA">Cyber VA</a> */}
        {/* <a href="" id="assessmentDash">Assessment Dashboard</a> */}
    </header>


    <form onSubmit={handleSubmit}>
      <div class="content-container">
      
        <input type="text" name="fileInput" placeholder='D://rollups' onChange={handleChange}/>
        <button type="submit" >Browse</button>
        <button onClick={handleBack}>Back</button>
        {/* <button onClick={handleCreate}>Create</button> */}
      </div>
    </form>


    <div id="footer">
      <button id="quit">Quit</button> 
      {/* onclick={handleQuit} */}
    </div>
</body>
  )
}

export default BrowseProject