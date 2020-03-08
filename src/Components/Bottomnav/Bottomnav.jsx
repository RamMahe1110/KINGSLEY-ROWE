import React from 'react'
import './Bottomnav.scss'

const Bottomnav = () => {
  return (
    <div className="bottom-nav">
      <div className="container">
        <div className="menu-btn">MENU</div>
        <div className="cart-btn">
          <span className="text">CART</span>
          <span className="items-count">{` ( ${1} )`}</span>
        </div>
      </div>
    </div>
  )
}

export default Bottomnav
