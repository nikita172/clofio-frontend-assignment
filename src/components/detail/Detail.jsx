import React from 'react'
import "./detail.css"
const Detail = ({ button, color }) => {
  return (
    <div className='details'>
      <div className='detail compName'>ACME corp</div>
      <div className='detail'>$2000,000</div>
      <div className='detail'>$323,566</div>
      <div className='detail last'>
        <div style={{ color: color == "blue" ? "blue" : "" }}>
          $788,899
        </div>

        {button == "true" ?
          <div>
            <button className='btn first'>Approve</button>
            <button className='btn'>reject</button>

          </div> : ""}
      </div>
    </div>
  )
}

export default Detail