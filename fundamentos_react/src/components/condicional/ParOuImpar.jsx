import React from "react";

export default (props) => {
  const number = getRandom();
  const isPar = number % 2 === 0;

  function getRandom() {
    return (
      Math.floor(
        Math.random() * (Math.floor(props.number) - Math.ceil(0) + 1)
      ) + 0
    );
  }
  return <div>{isPar ? <p>Par</p> : <p>Impar</p>}</div>;
};
