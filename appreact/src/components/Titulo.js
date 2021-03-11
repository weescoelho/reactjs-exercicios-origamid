import React from 'react'

const Titulo = (props) => {
  return (
    <h1 style={{color: props.cor}}>{props.texto}</h1>
  )
}

export default Titulo
