import React from 'react'

export default props => {
  return (
    <div>
      <p>{props.nome}</p>
      <p>{props.idade}</p>
      <p>{props.nerd ? 'verdadeiro' : 'false'}</p>
    </div>
  )
}