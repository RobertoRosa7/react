import React, { useState } from "react";
import ComunicacaoIndiretaFilho from "./ComunicacaoIndiretaFilho";

export default (props) => {
  const [user, setUser] = useState({});

  // nome, idade , nerd
  function fornecerInformacoes(nome, idade, nerd) {
    setUser({ nome, idade, nerd });
  }
  return (
    <div>
      <div>Component Pai</div>
      <div>
        nome {user.nome || "Anonimous"}: idade: {user.idade || 100}: nerd: {user.nerd ? 'Sim' : 'Não'}
      </div>
      <ComunicacaoIndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};
