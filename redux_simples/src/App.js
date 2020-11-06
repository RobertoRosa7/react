import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="app">
      <h1>Exercícios React-Redux (Simples)</h1>
      <div className="line">
        <Card title="card 1" red>X</Card>
        <Card title="card 2" green>X</Card>
      </div>
      <div className="line">
        <Card title="card 3" blue>Y</Card>
        <Card title="card 4" purple>Y</Card>
      </div>
    </div>
  );
}

export default App;
