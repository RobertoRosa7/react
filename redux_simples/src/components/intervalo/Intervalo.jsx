import "./intervalo.css";
import React from "react";
import Card from "../card/Card";

export default function Intervalo(props) {
  // const { min, max } = props; sem redux
  return (
    <Card title="Intervalo de Números" red>
      <div className="intervalo">
        <span>
          <strong>Mínimo:</strong>
          {/* <input type="number" value={min} onChange={(e) => props.onMinChanged(+e.target.value)} /> sem redux */}
          <input type="number" value={1} />
        </span>
        <span>
          <strong>Máximo:</strong>
          {/* <input type="number" value={max} onChange={(e) => props.onMaxChanged(+e.target.value)} /> sem redux */}
          <input type="number" value={10}/>
        </span>
      </div>
    </Card>
  );
}
