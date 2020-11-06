import "./App.css";
import Intervalo from "./components/intervalo/Intervalo";
import Soma from './components/soma/Soma'
import Sorteio from './components/sorteio/Sorteio'
import Media from './components/media/Media'

function App() {
  return (
    <div className="app">
      <h1>Exercícios React-Redux (Simples)</h1>
      <div className="line">
        <Intervalo />
      </div>
      <div className="line">
       <Soma />
       <Media />
       <Sorteio />
      </div>
    </div>
  );
}

export default App;
