import React from 'react'

const Input = ({label, id, children, ...props}) => {
  return (
    <>
    <label htmlFor={id}>{children}</label>
    <input type="text" id={id} {...props}/>
    </>
  )
}

export default Input
