import React from "react";
import ComunicacaoDiretaFilho from "./ComunicacaoDiretaFilho";

export default (props) => {
  return (
    <div>
      <ComunicacaoDiretaFilho
        nome="Pedro"
        idade={20}
        nerd={true}
      />
      <ComunicacaoDiretaFilho
        nome="Samaia"
        idade={25}
        nerd={false}
      />
    </div>
  );
};
