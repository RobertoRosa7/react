import "./intervalo.css";
import React from "react";
import Card from "../card/Card";
import { connect } from "react-redux";

function Intervalo(props) {
  // const { min, max } = props; sem redux
  const { min, max } = props;
  return (
    <Card title="Intervalo de Números" red>
      <div className="intervalo">
        <span>
          <strong>Mínimo:</strong>
          {/* <input type="number" value={min} onChange={(e) => props.onMinChanged(+e.target.value)} /> sem redux */}
          <input type="number" value={min} onChange={(e) => props.onMinChanged(+e.target.value)}/>
        </span>
        <span>
          <strong>Máximo:</strong>
          {/* <input type="number" value={max} onChange={(e) => props.onMaxChanged(+e.target.value)} /> sem redux */}
          <input type="number" value={max} onChange={(e) => props.onMaxChanged(+e.target.value)}/>
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

export default connect(mapStateToProps)(Intervalo);
