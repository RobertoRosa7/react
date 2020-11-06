import "./Sorteio.css";
import React from "react";
import Card from "../card/Card";
import { connect } from "react-redux";

function Sorteio(props) {
  // const { min, max } = props; // sem redux
  // const aleatorio = Math.ceil(Math.random() * (max - min) + min); // sem redux

  const { min, max } = props;
  const aleatorio = Math.ceil(Math.random() * (max - min) + min);
  return (
    <Card title="Sorteio de um número" blue>
      <div className="sorteio">
        <span>
          <span>Resultado: </span>
          {/* <strong>{aleatorio}</strong> // sem redux */}
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  };
}
export default connect(mapStateToProps)(Sorteio);
