import React from 'react'
import Card from "../card/Card"
import "./cards.css"
const Cards = () => {
  return (
    <div className='cardsContainer'>
      <div className='cardsWrap'>
        <Card budget="$ 400,000" title="Total budget you own" />
        <Card budget="$ 565,567" title="Spent month-to-date" color="blue" />
        <Card budget="$ 856,344" title="Forecasted till month date" color="green" />
      </div>
    </div>
  )
}

export default Cards