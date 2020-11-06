import "./App.css";
import React, { useState } from "react";
import Intervalo from "./components/intervalo/Intervalo";
import Soma from "./components/soma/Soma";
import Sorteio from "./components/sorteio/Sorteio";
import Media from "./components/media/Media";
function App() {
  const [min, setMin] = useState(10);
  const [max, setMax] = useState(100);

  return (
    <div className="app">
      <h1>Exercícios React-Redux (Simples)</h1>
      <div className="line">
        <Intervalo
          min={min}
          max={max}
          onMinChanged={setMin}
          onMaxChanged={setMax}
        />
      </div>
      <div className="line">
        <Soma min={min} max={max} />
        <Media min={min} max={max} />
        <Sorteio min={min} max={max} />
      </div>
    </div>
  );
}

export default App;
