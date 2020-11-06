import "./intervalo.css";
import React from "react";
import Card from "../card/Card";

export default function Intervalo(props) {
  return (
    <Card title="Intervalo de músicas" red>
      <div className="intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={0} readOnly />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={10} readOnly />
        </span>
      </div>
    </Card>
  );
}
