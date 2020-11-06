import "./Sorteio.css";
import React from "react";
import Card from "../card/Card";

export default function Sorteio(props) {
  const { min, max } = props;
  const aleatorio = Math.ceil(Math.random() * (max - min) + min);
  return (
    <Card title="Sorteio de um número" blue>
      <div className="sorteio">
        <span>
          <span>Resultado: </span>
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  );
}
