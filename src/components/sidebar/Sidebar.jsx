import React from 'react'
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='siderbarTop'>
        <img className='cloudImg' src="/images/cloud-preview.png" />
        <img className='boxImg' src="/images/box.svg" />
        <img className='boxImg' src="/images/box.svg" />
        <img className='boxImg' src="/images/box.svg" />
        <img className='boxImg' src="/images/box.svg" />
        <img className='boxImg' src="/images/box.svg" />
        <img className='boxImg' src="/images/box.svg" />
      </div>
      <div className='nameIcon'>
        NR
      </div>

    </div>
  )
}

export default Sidebar