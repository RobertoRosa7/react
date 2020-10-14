import React from "react";

export default (props) => {
  const membros = {
    display:'block',
    width:'100%'
  }
  return (
    <div style={membros}>
      <div style={membros}>Nome: {props.nome}</div>
      <div style={membros}>Sobrenome: <div>{props.sobrenome}</div></div>
    </div>
  );
};
