import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
  const lis = alunos.map((aluno, index) => (
    <div key={index} style={{display:'block'}}>
      {aluno.id}) - {aluno.nome}: {aluno.nota}
    </div>
  ));

  
  return <div>{lis}</div>;
};
