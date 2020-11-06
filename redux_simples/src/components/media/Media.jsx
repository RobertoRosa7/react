import "./Media.css";
import React from "react";
import Card from "../card/Card";

export default function Media(props) {
  const { min, max } = props;
  return (
    <Card title="Média dos Números" green>
      <div className="media">
        <span>
          <span>Resultado: </span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  );
}
