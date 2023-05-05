import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';

function DropdownMenu(props) {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/getTable')
      .then(response => {
        setOptions(response.data);
        setSelectedOption(response.data[0].name); // set default selected option
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    props.onSelectOption(event.target.value); // call the callback function with selected option
  }

  return (
    <select value={selectedOption} onChange={handleOptionChange}>
      {options.map(option => (
        <option key={option.id} value={option.name}>{option.name}</option>
      ))}
    </select>
  );
}




function BrowseProject() {
  const navigate = useNavigate();
  const [file, setFile] = useState('');
  const [selectedOption, setSelectedOption] = useState('Naive');

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  }

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
    console.log(selectedOption)
    axios.post('http://127.0.0.1:5000/changeTable/' + selectedOption)
    navigate('/cyberdashboard');

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
        <label>Enter project name</label>
        <DropdownMenu onSelectOption={handleSelectOption} />
        <button type="submit">Enter</button>
        <button onClick={handleBack}>Back</button>
      </div>
    </form>


    <div id="footer">
      <button id="quit" onClick={handleBack}>Quit</button> 
      
    </div>
</body>
  )
}

export default BrowseProject