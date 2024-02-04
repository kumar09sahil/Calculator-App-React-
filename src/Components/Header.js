import React from 'react'

const Header = (props) => {
  return (
    <>
        <h3 className='head'>calc</h3>
          <div className="togglebar">
            <p>{ props.toggleState==='dark'? 'light' : 'Dark'}</p>
            <button className={`toggle-btn-${props.toggleState==='light' ? 'right' : 'left'}`} onClick={() => props.toggleEvent()}></button>
          </div>
    </>
  )
}

export default Header
