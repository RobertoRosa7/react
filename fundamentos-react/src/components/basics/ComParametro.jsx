import './ComParametro.css'
import React from 'react'


export default function ComParamentro(props) {
  return (
    <section className="com-parametro">
      <h2>Component com paramentro - dados de aluno</h2>
      <div className="card">
        <p><span>Nome: </span>{props.user.nome}</p>
        <p><span>Sobrenome: </span>{props.user.sobrenome}</p>
        <p><span>Apelido: </span>{props.user.apelido}</p>
        <p><span>Idade: </span>{props.user.idade}</p>
        <p><span>Sexo: </span>{props.user.sexo}</p>
        <p><span>Universidade: </span>{props.user.instituicao_ensino}</p>
        <p><span>Profissão: </span>{props.user.profissao}</p>
        <div className="media-social">
          {
            props.user.media_social.map((element, index) => {
              return (
                <a href={element.url} key={index}>{element.tipo}</a>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}