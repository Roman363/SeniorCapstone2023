import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function NetworkStatistics(){

    const navigate = useNavigate();
    const [file, setFile] = useState('');


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

    const Statistics = [
        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Windows", label: "OP", value : "Windows Bot Service", label: "Active Service", value: "VTP", label : "Protocol",  value: "350", label : "Sent Packets",  value: "Low", label : "Traffic Amount"},
        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Linux", label: "OP", value : "Cooling Service", label: "Active Service", value: "VTP", label : "Protocol",  value: "2600", label : "Sent Packets",  value: "high", label : "Traffic Amount"},
        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Switch", label: "OP", value : "Password Service", label: "Active Service", value: "VTP", label : "Protocol",  value: "9250", label : "Sent Packets",  value: "very High", label : "Traffic Amount"},
        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Server", label: "OP", value : "Cooling Service", label: "Active Service", value: "VTP", label : "Protocol",  value: "756", label : "Sent Packets",  value: "Medium", label : "Traffic Amount"},
        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Server", label: "OP", value : "System check", label: "Active Service", value: "VTP", label : "Protocol",  value: "100", label : "Sent Packets",  value: "Low", label : "Traffic Amount"},
        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Linux", label: "OP", value : "System Check", label: "Active Service", value: "VTP", label : "Protocol",  value: "122", label : "Sent Packets",  value: "Low", label : "Traffic Amount"},
        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Switch", label: "OP", value : "Cooling Service", label: "Active Service", value: "VTP", label : "Protocol",  value: "101", label : "Sent Packets",  value: "Low", label : "Traffic Amount"},
        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Windows", label: "OP", value : "None", label: "Active Service", value: "VTP", label : "Protocol",  value: "350", label : "Sent Packets",  value: "Low", label : "Traffic Amount"},

    ];

    return (
        <form onSubmit={handleSubmit}>
          <h3>Network Statistics</h3>
    
    
          <input type="text" name="fileInput" placeholder='D://rollups' onChange={handleChange}/>
          <button type="submit" >Browse</button>
          <br />
          
        </form>
    )
    

    


}

export default NetworkStatistics














