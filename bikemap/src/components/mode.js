import React from "react";
import  ReactDOM from "react";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch.js";



const Mode = ({children}) => {
  return (
    <div style={{padding: '90vh 0 0 0'}}>
      <ToggleSwitch Name='pls'></ToggleSwitch>
    </div>
  )
}

export default Mode;