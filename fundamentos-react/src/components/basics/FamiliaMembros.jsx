import React from "react";

export default (props) => {
  const membros = {
    display:'block',
    width:'100%'
  }
  return (
    <span style={membros}>
      <span style={membros}>Nome: {props.nome}</span>
      <span style={membros}>Sobrenome: <strong>{props.sobrenome}</strong></span>
    </span>
  );
};
