import React from "react";

export default class Mega extends React.Component {
  pStyles = {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent:'space-between'
  }
  numberLuck = {
    display:'inline-block',
    width: '40px',
    height: '40px',
    padding: '8px',
    background: '#0f0',
    borderRadius: '50%',
    margin:'auto',
    fontWeight: '700'
  }
  constructor(props) {
    super(props);
    this.state = {
      result_sorteio: this.otherWaytoGenerateArray(this.props.qtde || 6),
    };
    // const arr = [];

    // for (let i = 0; i < 10; i++) {
    //   arr.push(this.createNumArray(1, 61));
    // }
    // console.log(arr);
  }

  setResultSorteio = () => {
    this.setState({ result_sorteio: this.otherWaytoGenerateArray(6) });
  };

  // createNumArray = (min, max) => {
  //   const arr = [];
  //   for (let i = 0; i < 6; i++) {
  //     arr.push(this.gerarNumNaoContido(min, max, arr));
  //   }
  //   return arr;
  // };

  otherWaytoGenerateArray = (num) => {
    return Array(num)
      .fill(0)
      .reduce((n) => [...n, this.gerarNumNaoContido(1, 61, n)], [])
      .sort((a, b) => a - b);
  };

  gerarNumNaoContido = (min, max, array) => {
    const random = Math.ceil(Math.random() * (max - min) + min);
    return array.includes(random)
      ? this.gerarNumNaoContido(min, max, array)
      : random;
  };
  render = () => (
    <div>
      <p style={this.pStyles}>
        {this.state.result_sorteio.map((value, index) => (
          <span style={this.numberLuck} key={index}>{value}</span>
        ))}
      </p>
      <div className="container-btn">
        <button className="btn" type="button" onClick={this.setResultSorteio}>
          Mega Sena Resultado
        </button>
      </div>
    </div>
  );
}
