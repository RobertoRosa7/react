import './index.css'

import ReactDOM from 'react-dom'
import React from 'react'

import ComParametro from './components/basics/ComParametro'
import Primeiro from './components/basics/Primeiro'

const user = {
  "nome":"Roberto",
  "sobrenome": "Rosa da Silva",
  "apelido":"beto",
  "idade": 32,
  "sexo": "Masculino",
  "instituicao_ensino":"Universidade nove de Julhos",
  "altura": 1.75,
  "cor": "Branco",
  "biotipo":"Magro",
  "profissao":"Desenvolvedor de Software",
  "foto":"#",
  "media_social": [
    {
      "tipo":"facebook",
      "following":0,
      "follower":0,
      "url":"#"
    },
    {
      "tipo":"twitter",
      "following":0,
      "follower":0,
      "url":"#"
    },
    {
      "tipo":"instagram",
      "following":0,
      "follower":0,
      "url":"#"
    }
  ]
}

ReactDOM.render(
  <main>
    <Primeiro />
    <ComParametro user={user} />
  </main>,
  document.querySelector('#root'))