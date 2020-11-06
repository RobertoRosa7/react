import "./Soma.css";
import React from "react";
import Card from "../card/Card";

export default function Soma(props) {
  return (
    <Card title="Soma dos Números" purple>
      <div className="soma">
        <span>
          <span>Resulta:</span>
          <strong>10</strong>
        </span>
      </div>
    </Card>
  );
}
