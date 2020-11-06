import "./Soma.css";
import React from "react";
import Card from "../card/Card";
import { connect } from "react-redux";

function Soma(props) {
  // const { min, max } = props; // sem redux
  const { min, max } = props;
  return (
    <Card title="Soma dos Números" purple>
      <div className="soma">
        <span>
          <span>Resultado: </span>
          {/* <strong>{max + min}</strong> sem redux */}
          <strong>{max + min}</strong>
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

export default connect(mapStateToProps)(Soma);
