import React from "react";

export default class Botoes extends React.Component {
  styleButton = {
    width: "100%",
    border: "none",
    outline: "none",
    margin: "10px 0",
    padding: "16px 8px",
    cursor: "pointer",
    maxWidth: "130px",
  };
  
  containerBtn = {
    display: "flex",
    justifyContent: "space-between",
  };

  constructor(props) {
    super(props);
  }
  render = () => (
    <div style={this.containerBtn}>
      <button style={this.styleButton} onClick={this.props.setInc}>
        +
      </button>
      <button style={this.styleButton} onClick={this.props.setDec}>
        -
      </button>
    </div>
  );
}
