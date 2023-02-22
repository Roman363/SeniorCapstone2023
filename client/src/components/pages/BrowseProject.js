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
    navigate(-1);
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
    <form onSubmit={handleSubmit}>
      <h3>Create NAIVE Project</h3>


      <input type="text" name="fileInput" placeholder='D://rollups' onChange={handleChange}/>
      <button type="submit" >Browse</button>
      <br />
      <button onClick={handleBack}>Back</button>
      <button onClick={handleCreate}>Create</button>
    </form>
  )
}

export default BrowseProject