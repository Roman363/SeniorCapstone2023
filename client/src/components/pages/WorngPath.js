import React from 'react'
import { useNavigate } from'react-router-dom';

export default function Worngpath() {

  const navigate = useNavigate();

  function hancleClick(event) {
    event.preventDefault();
    navigate('/');
  }

  return (
    <div>
    Worngpath
    <br />
    <button onClick={hancleClick}>Going back to the Main</button>
    </div>
    
  )
}
