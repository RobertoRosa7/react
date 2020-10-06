import React from 'react'

export default props => {
  console.log(props)
  const number = getRandom(props.min, props.max)

  function getRandom(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  return (
    <section className="aleatorio-number">
      <h2>Número Aleatório!</h2>
      <p>Número de hoje é: {number}</p>
    </section>
  )
}