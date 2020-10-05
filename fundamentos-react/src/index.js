import './index.css'

import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'

// const tag = <strong>ReactJS</strong>

ReactDOM.render(
  <main>
    <Primeiro />
    <ComParametro titulo="Situação do aluno" nota={3.9} nome="João" />
  </main>,
  document.querySelector('#root'))