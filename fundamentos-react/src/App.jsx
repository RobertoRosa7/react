import React from 'react'
import ComParametro from './components/basics/ComParametro'
import Primeiro from './components/basics/Primeiro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'

const user = {
  "nome": "Roberto",
  "sobrenome": "Rosa da Silva",
  "apelido": "beto",
  "idade": 32,
  "sexo": "Masculino",
  "instituicao_ensino": "Universidade nove de Julhos",
  "altura": 1.75,
  "cor": "Branco",
  "biotipo": "Magro",
  "profissao": "Desenvolvedor de Software",
  "foto": "#",
  "media_social": [
    {
      "tipo": "facebook",
      "following": 0,
      "follower": 0,
      "url": "#"
    },
    {
      "tipo": "twitter",
      "following": 0,
      "follower": 0,
      "url": "#"
    },
    {
      "tipo": "instagram",
      "following": 0,
      "follower": 0,
      "url": "#"
    }
  ]
}
export default () => (
  <main>
    <h2>Fundamentos React!</h2>
    <Aleatorio min={0} max={100} />
    <Fragmento />
    <ComParametro user={user} />
    <Primeiro />
  </main>
)
