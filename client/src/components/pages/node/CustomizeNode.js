import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomizeNode() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
      axios.get('http://127.0.0.1:5000/listipnodes')
        .then(response => {
          setItems(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);


    function handleCheckboxChange(event, ip) {
        const isChecked = event.target.checked;
    
        // Update the item's completed status
        axios.post("http://127.0.0.1:5000/updateipnodes", {ip, isChecked})
          .then(response => {
            // Update the list of items
            const updatedItems = items.map(item => {
              if (item.ip === ip) {
                return { ...item, check: isChecked };
              } else {
                return item;
              }
            });
            setItems(updatedItems);
          })
          .catch(error => {
            console.error(error);
          });
    }
    

    function handleBack(event) {
        navigate("/cyberdashboard");
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
        <body>
            <header id="mainNav">
                <h2 id="naive">Customize Node</h2>
            </header>
            <div >
                <div class="main">

                <ul>
                {items.map(item => (
                    <li key={item.ip}>
                    <label>
                        {item.ip}
                        <input type="checkbox" checked={item.check} onChange={event => handleCheckboxChange(event, item.ip)} />
                        
                    </label>
                    </li>
                ))}
                </ul>

                </div>
            </div>
            <div>
                
            </div>
            <div id="footer">
                <button id="back" onClick={handleBack}>Back</button> 
                <button id="nodeColor" onClick={handleColor}>Node Color</button>
                <button id="specifyStatus" onClick={handleStatus}>Specify Node Status</button>
                <button id="modifyImage" onClick={handleImage}>Modify Node Image</button>
                
                {/* <!-- onclick={handleQuit} --> */}
            </div>
        </body>
    );
  }
  

export default CustomizeNode