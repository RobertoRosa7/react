import React from 'react'
export default function ComParamentro(props) {
  console.log(props)
  return (
    <section>
      <h1>Component com paramentro</h1>
      <p>{props.titulo}</p>
      <p>{props.subtitulo}</p>
    </section>
  )
}