import "./Soma.css";
import React from "react";
import Card from "../card/Card";

export default function Soma(props) {
  const { min, max } = props;

  return (
    <Card title="Soma dos Números" purple>
      <div className="soma">
        <span>
          <span>Resultado: </span>
          <strong>{max + min}</strong>
        </span>
      </div>
    </Card>
  );
}
