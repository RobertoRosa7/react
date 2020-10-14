import React from "react";

export default (props) => {
  const number = getRandom(props.min, props.max);

  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div className="aleatorio-number">
      <div>min: {props.min}</div>
      <div>max: {props.max}</div>
      <div>Número de hoje é: {number}</div>
    </div>
  );
};
