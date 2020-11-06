import "./App.css";
import Card from "./components/card/Card";
import Intervalo from "./components/intervalo/Intervalo";

function App() {
  return (
    <div className="app">
      <h1>Exercícios React-Redux (Simples)</h1>
      <div className="line">
        <Intervalo />
      </div>
      <div className="line">
        <Card title="card 2" green>
          X
        </Card>

        <Card title="card 3" blue>
          Y
        </Card>
        <Card title="card 4" purple>
          Y
        </Card>
      </div>
    </div>
  );
}

export default App;
