import React from 'react'
import "./styles/Button.css"

const Button = ({handledNewQuote}) => {
  return <button className='button' onClick={handledNewQuote}>Probar mi suerte</button>
  
}

export default Button