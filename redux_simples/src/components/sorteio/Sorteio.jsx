import "./Sorteio.css";
import React from "react";
import Card from "../card/Card";

export default function Sorteio(props) {
  return (
    <Card title="Sorteio de um número" blue>
      <div className="sorteio">
        <span>
          <span>Resultado:</span>
          <strong>10</strong>
        </span>
      </div>
    </Card>
  );
}
