import React,{useState} from 'react'
import "./App.css";
const App = () => {
 const [stopButton,setStopButton]=useState("#4b5069")
 const [readyButton,setReadyButton]=useState("#4b5069")
 const [goButton,setGoButton]=useState("#4b5069")

 let stopbutton=()=>{
    setStopButton('#cf1124')
    setReadyButton('#4b5069')
    setGoButton('#4b5069')
 }
 let readybutton=()=>{
    setStopButton('#4b5069')
    setReadyButton('#f7c948')
    setGoButton('#4b5069')
 }
 
 let gobutton=()=>{
    setStopButton('#4b5069')
    setReadyButton('#4b5069')
    setGoButton('#199473')
 }

  return (
    <div className="container">
      <h1>Traffic Light</h1>
      <div className="sub-container">
        <div className="buttons-container">
          <button className="stop-button"style={{backgroundColor:stopButton}} onClick={()=>{stopbutton()}} >Stop</button>
          <button className="ready-button" style={{backgroundColor:readyButton}} onClick={()=>{readybutton()}} >Ready</button>
          <button className="go-button" style={{backgroundColor:goButton}} onClick={()=>{gobutton()}} >Go</button>
        </div>
        <div className="bulb-container">
          <div className="red-bulb" style={{backgroundColor:stopButton}} ></div>
          <div className="yellow-bulb"  style={{backgroundColor:readyButton}} ></div>
          <div className="green-bulb" style={{backgroundColor:goButton}} ></div>
        </div>
      </div>
    </div>
  );
};

export default App;
