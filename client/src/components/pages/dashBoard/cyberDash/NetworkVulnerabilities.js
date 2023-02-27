import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function NetworkVulnerabilities(){

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

    

    

 
    const Vulnerabilities = [

        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Windows", label: "OP", value : "Cooling Service", label: "Active Service", value: "VTP", label : "Protocol",  value: "350", label : "Sent Packets",  value: "Low", label : "Traffic Amount"},
        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Windows", label: "OP", value : "Cooling Service", label: "Active Service", value: "VTP", label : "Protocol",  value: "350", label : "Sent Packets",  value: "Low", label : "Traffic Amount"},
        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Windows", label: "OP", value : "Cooling Service", label: "Active Service", value: "VTP", label : "Protocol",  value: "350", label : "Sent Packets",  value: "Low", label : "Traffic Amount"},
        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Windows", label: "OP", value : "Cooling Service", label: "Active Service", value: "VTP", label : "Protocol",  value: "350", label : "Sent Packets",  value: "Low", label : "Traffic Amount"},
        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Windows", label: "OP", value : "Cooling Service", label: "Active Service", value: "VTP", label : "Protocol",  value: "350", label : "Sent Packets",  value: "Low", label : "Traffic Amount"},
        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Windows", label: "OP", value : "Cooling Service", label: "Active Service", value: "VTP", label : "Protocol",  value: "350", label : "Sent Packets",  value: "Low", label : "Traffic Amount"},
        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Windows", label: "OP", value : "Cooling Service", label: "Active Service", value: "VTP", label : "Protocol",  value: "350", label : "Sent Packets",  value: "Low", label : "Traffic Amount"},
        { value: "157.143.80.158", label: "System IP", value: "Open", label :"Associations", value: "Windows", label: "OP", value : "Cooling Service", label: "Active Service", value: "VTP", label : "Protocol",  value: "350", label : "Sent Packets",  value: "Low", label : "Traffic Amount"},

        
    ];

    return (
        <form onSubmit={handleSubmit}>
          <h3>Network Vulnerabilities</h3>
    
    
          <input type="text" name="fileInput" placeholder='D://rollups' onChange={handleChange}/>
          <button type="submit" >Browse</button>
          <br />
          
        </form>
    )
        





}

export default NetworkVulnerabilities



