import React from 'react'
import "./table2.css"
import Detail from '../detail/Detail'
const Table2 = ({ title }) => {
  return (
    <div className='table'>
      <h5 className='title'>{title}</h5>
      <div className='headings'>
        <div className='heading'>Bucket Name</div>
        <div className='heading'>Current Budget</div>
        <div className='heading'>Requested Budget</div>
        <div className='heading'>Requested By</div>
      </div>
      <Detail button="true" color="blue" />


    </div>
  )
}

export default Table2