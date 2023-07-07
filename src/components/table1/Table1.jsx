import React from 'react'
import "./table1.css"
import Detail from '../detail/Detail'
const Table1 = ({ title }) => {
  return (
    <div className='table'>
      <h5 className='title'>{title}</h5>
      <div className='headings'>
        <div className='heading'>Name</div>
        <div className='heading'>Budget</div>
        <div className='heading'>Spend</div>
        <div className='heading'>Forecast</div>
      </div>
      <Detail />
      <Detail />


    </div>
  )
}

export default Table1