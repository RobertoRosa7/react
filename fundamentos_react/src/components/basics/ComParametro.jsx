import './ComParametro.css'
import React from 'react'


export default function ComParamentro(props) {
  return (
    <div className="com-parametro">
      <div className="card">
        <div><div>Nome: </div>{props.user.nome}</div>
        <div><div>Sobrenome: </div>{props.user.sobrenome}</div>
        <div><div>Apelido: </div>{props.user.apelido}</div>
        <div><div>Idade: </div>{props.user.idade}</div>
        <div><div>Sexo: </div>{props.user.sexo}</div>
        <div><div>Universidade: </div>{props.user.instituicao_ensino}</div>
        <div><div>Profissão: </div>{props.user.profissao}</div>
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
    </div>
  )
}