import React from "react";

export default class Mega extends React.Component {
  constructor(props) {
    super(props);
  }

  gerarNumNaoContido = (min, max, array) => {
    const random = parseInt(Math.random() * (max - min)) + min;
    return array.includes(random) ? this.gerarNumNaoContido(min, max, array) : random;
  };
  render = () => <div>mega</div>;
}
