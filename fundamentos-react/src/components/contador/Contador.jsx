import React from "react";

class Contador extends React.Component {
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
    this.state = {
      numero: props.numInicial || 0.0,
      passo: props.passoInicial || 5.5,
    };
    // this.inc = this.inc.bind(this); // preservar o escope da class sem arrow function
  }

  inc = () => this.setState({ numero: this.state.numero + this.state.passo });
  dec = () => this.setState({ numero: this.state.numero - this.state.passo });
  setPasso = (e) => this.setState({ passo: parseFloat(e.target.value) });

  render = () => (
    <div>
      <h2>
        R${" "}
        {Intl.NumberFormat("pt-BR", {
          currency: "BRL",
          maximumFractionDigits: 2,
        }).format(this.state.numero)}
      </h2>

      <div style={this.containerBtn}>
        <button style={this.styleButton} onClick={this.inc}>
          +
        </button>
        <button style={this.styleButton} onClick={this.dec}>
          -
        </button>
      </div>
      <div>
        <input
          type="number"
          placeholder="digite o passo"
          value={this.state.passo}
          onChange={this.setPasso}
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            padding: "16px 8px",
            backgroundColor: "#f0f0f0",
            margin: "5px 0",
          }}
        />
      </div>
    </div>
  );
}
export default Contador;
