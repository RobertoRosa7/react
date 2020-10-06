import './index.css'

import ReactDOM from 'react-dom'
import React from 'react'

import ComParametro from './components/basics/ComParametro'
import Primeiro from './components/basics/Primeiro'

ReactDOM.render(
  <main>
    <Primeiro />
    <ComParametro titulo="Situação do aluno" nota={3.9} nome="João" />
  </main>,
  document.querySelector('#root'))