import "./Media.css";
import React from "react";
import Card from "../card/Card";
import { connect } from "react-redux";

function Media(props) {
  // const { min, max } = props; // sem redux
  const { min, max } = props; // com redux
  return (
    <Card title="Média dos Números" green>
      <div className="media">
        <span>
          <span>Resultado: </span>
          {/* <strong>{(max + min) / 2}</strong> sem redux */}
          <strong>{(max + min) / 2}</strong>
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

export default connect(mapStateToProps)(Media);
