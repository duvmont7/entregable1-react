import React from 'react'
import Button from './Button'
import "./styles/ContainerInfo.css"

const ContainerInfo = ({quote, handledNewQuote}) => {
  return (
    <section>
    <h1 className='containerInfo__title'>Galletas de la fortuna</h1>

    <Button handledNewQuote={handledNewQuote} />

    <article className='containerInfo__phrase'>
      <p>{quote.phrase}</p>
    </article>

    <article className='containerInfo__author'>
      <h4>Fuente: {quote.author}</h4>
    </article>
  </section>
  )
}

export default ContainerInfo