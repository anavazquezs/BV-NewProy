import React from 'react';
import './Button.css'

const Button = ({HandleClick, children}) => {
  return (
    <button className='boton-carrito' onClick={HandleClick}>{children}</button>
  )
}

export default Button;