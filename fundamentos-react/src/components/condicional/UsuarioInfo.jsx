import React from "react";
import If, { Else } from "./If";

export default (props) => {
  const user = props.user || {};
  return (
    <div>
      <If test={user && user.nome}>
        Seja bem vindo <strong>{user.nome}</strong>!
        <Else>
          Seja bem vindo <strong>Anonimous</strong>!
        </Else>
      </If>
      {/* Sem else */}
      {/* <If test={!user || !user.nome}>
        Seja bem vindo <strong>Anonimous</strong>!
      </If> */}
    </div>
  );
};
