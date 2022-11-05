import React from "react";
import  ReactDOM from "react";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch.js";



const Mode = ({children}) => {
  return (
    <>    
      <h1>Choosing Mode.</h1>
      <ToggleSwitch Name='pls'></ToggleSwitch>
    </>
  )
}

export default Mode;