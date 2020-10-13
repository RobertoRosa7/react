import './ComParametro.css'
import React from 'react'


export default function ComParamentro(props) {
  return (
    <span className="com-parametro">
      <span className="card">
        <span><span>Nome: </span>{props.user.nome}</span>
        <span><span>Sobrenome: </span>{props.user.sobrenome}</span>
        <span><span>Apelido: </span>{props.user.apelido}</span>
        <span><span>Idade: </span>{props.user.idade}</span>
        <span><span>Sexo: </span>{props.user.sexo}</span>
        <span><span>Universidade: </span>{props.user.instituicao_ensino}</span>
        <span><span>Profissão: </span>{props.user.profissao}</span>
        <span className="media-social">
          {
            props.user.media_social.map((element, index) => {
              return (
                <a href={element.url} key={index}>{element.tipo}</a>
              )
            })
          }
        </span>
      </span>
    </span>
  )
}