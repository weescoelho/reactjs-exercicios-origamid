import React from 'react'
import Input from './Input'
import Button from './Button'

const Form = () => {
  return (
    <form>
      <Input id="email" label="email" required>Email</Input>
      <Input id="password" label="password" >Password</Input>
      <p>
      <Button/>
      </p>
    </form>
  )
}

export default Form
