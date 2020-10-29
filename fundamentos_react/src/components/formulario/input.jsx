import "./input.css";
import React from "react";
import { useState } from "react";

export default (props) => {
  const [valor, setValor] = useState("");

  function quandoMudar(e) {
    setValor(e.target.value);
  }
  return (
    <div className="input">
      <label htmlFor="">Controlado</label>
      <input value={valor} onChange={quandoMudar} placeholder="Com escrita" />
      <label htmlFor="">Não controlado</label>
      <input value={undefined} placeholder="Não controlado" />
      <label htmlFor="">Controlado somente leitura</label>
      <input value={valor} readOnly placeholder="Somente leitura" />
    </div>
  );
};
