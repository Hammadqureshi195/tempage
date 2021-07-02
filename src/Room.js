//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './Room.css';

function Room() {

    let [Add,Sub] = useState(20);
    let [islit,setlit] = useState(true);
    let [temp,settemp] = useState(72);

    let Increase = () => Sub(++Add);
    let Decrease = () => Sub(--Add);

    let offLight = () => setlit(islit=false);
    let onLight = () => setlit(islit=true);

    let tempInc = () => settemp(++temp);
    let tempDec = () => settemp(--temp);

    let change;

    if(islit===true){
      change = "dark"
    }else
    {
      change = "Lit"
    }

    return (
      <center>
    <div className={" room " + (islit?'lit':'dark')}>
      <br />
      <br />
      <h1>The Room is : {islit ? 'lit' : 'dark'}</h1>
      <h3>The age : {Add}</h3>
       <br />
       <br />
       <br />
       <button onClick={Increase} className="button"> Increase Age </button>
       <button onClick={Decrease} className="button" > Decrease Age </button> 
       <br />
       <br />
       <br />
       <h1>Want to switch "{change}" the lights ...</h1>
       <button onClick={offLight} className="button"> OFF </button>
       <button onClick={onLight} className="button"> ON </button>
       <br />
       <br />
       <br />
       <h3>Change the Temperature of the Room : {temp}</h3>
       <br />
       <br />
       <br />
       <button onClick={tempInc} className="button"> Decrease Cooling </button>
       <button onClick={tempDec} className="button"> Increase Cooling </button>
    </div>
    </center>
  );
}

export default Room;
