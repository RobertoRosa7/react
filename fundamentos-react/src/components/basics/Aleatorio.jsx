import React from "react";

export default (props) => {
  const number = getRandom(props.min, props.max);

  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <span className="aleatorio-number">
      <span>min: {props.min}</span>
      <span>max: {props.max}</span>
      <span>Número de hoje é: {number}</span>
    </span>
  );
};
