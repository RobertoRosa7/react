import "./Media.css";
import React from "react";
import Card from "../card/Card";

export default function Media(props) {
  return (
    <Card title="Média dos Números" green>
      <div className="media">
        <span>
          <span>Resulta:</span>
          <strong>5</strong>
        </span>
      </div>
    </Card>
  );
}
