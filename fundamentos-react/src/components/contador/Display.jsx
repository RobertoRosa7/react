import React from "react";

export default class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render = () => (
    <div>
      <h2>
        R${" "}
        {Intl.NumberFormat("pt-BR", {
          currency: "BRL",
          maximumFractionDigits: 2,
        }).format(this.props.num)}
      </h2>
    </div>
  );
}
