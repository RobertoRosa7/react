import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
  const lis = alunos.map((aluno, index) => (
    <span key={index} style={{display:'block'}}>
      {aluno.id}) - {aluno.nome}: {aluno.nota}
    </span>
  ));

  
  return <span>{lis}</span>;
};
