import "./App.css";
// import React, { useState } from "react"; // sem redux
import React from "react";
import Intervalo from "./components/intervalo/Intervalo";
import Soma from "./components/soma/Soma";
import Sorteio from "./components/sorteio/Sorteio";
import Media from "./components/media/Media";
function App() {
  // const [min, setMin] = useState(10); // sem redux
  // const [max, setMax] = useState(100); // sem redux
  function setMin(){

  }
  function setMax() {
    
  }
  return (
    <div className="app">
      <h1>Exercícios React-Redux (Simples)</h1>
      <div className="line">
        {/* <Intervalo min={min} max={max} onMinChanged={setMin} onMaxChanged={setMax} /> sem redux  */}
        <Intervalo onMinChanged={setMin} onMaxChanged={setMax}/>
      </div>
      <div className="line">
        {/* <Soma min={min} max={max} /> sem redux */}
        {/* <Media min={min} max={max} /> sem redux */}
        {/* <Sorteio min={min} max={max} /> sem redux */}

        <Soma />
        <Media />
        <Sorteio />
      </div>
    </div>
  );
}

export default App;
