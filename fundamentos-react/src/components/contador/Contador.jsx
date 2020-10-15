import React from "react";
import Botoes from "./Botoes";
import Display from "./Display";
import PassoForm from "./PassoForm";

class Contador extends React.Component {
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
  setPasso = (novoPasso) => this.setState({ passo: novoPasso });
  render = () => (
    <div>
      <Display num={this.state.numero} />
      <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
      <Botoes setInc={this.inc} setDec={this.dec} />
    </div>
  );
}
export default Contador;
