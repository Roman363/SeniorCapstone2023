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


<body>
<header id="mainNav">
    <h2 id="naive">Customize Node</h2>
</header>


<form>
  <div class="content-container">
      <div class="main">

        

      </div>
  </div>
</form>

  <div id="footer">
    <button id="back" onClick={handleBack}>Back</button> 
    <button id="nodeColor" onClick={handleColor}>Node Color</button>
    <button id="modifyImage" onClick={handleImage}>Modify Node Image</button>
    <button id="specifyStatus" onClick={handleStatus}>Specify Node Status</button>
    {/* <!-- onclick={handleQuit} --> */}
  </div>
</body>


    );
}

export default CustomizeNode