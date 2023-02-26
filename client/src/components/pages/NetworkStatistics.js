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




    




}

















