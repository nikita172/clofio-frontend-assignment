import React from 'react'
import "./card.css"
const Card = ({ color, budget, title }) => {
  console.log(color)
  return (
    <div className='card' style={{ background: color == "blue" ? "#c6dfe8" : color == "green" ? "#e4f9db" : "" }}>
      <h3 className='cost'>{budget}</h3>
      <p className='desc'>{title}</p>

    </div>
  )
}

export default Card