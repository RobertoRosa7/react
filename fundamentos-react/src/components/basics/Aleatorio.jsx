import React from "react";

export default (props) => {
  const number = getRandom();

  function getRandom() {
    return Math.floor(Math.random() * (Math.floor(props.max) - Math.ceil(props.min) + 1)) + props.min;
  }
  return (
    <div className="aleatorio-number">
      <div>min: {props.min}</div>
      <div>max: {props.max}</div>
      <div>Número de hoje é: {number}</div>
    </div>
  );
};
