import "./Sorteio.css";
import React from "react";
import Card from "../card/Card";

export default function Sorteio(props) {
  // const { min, max } = props; // sem redux
  // const aleatorio = Math.ceil(Math.random() * (max - min) + min); // sem redux
  return (
    <Card title="Sorteio de um número" blue>
      <div className="sorteio">
        <span>
          <span>Resultado: </span>
          {/* <strong>{aleatorio}</strong> // sem redux */}
          <strong>10</strong>
        </span>
      </div>
    </Card>
  );
}
