import React, { Component } from 'react'
import './Topbar.scss'

class Topbar extends Component {
  state = {}
  render() {
    return (
      <div className="topbar">
        <div className="container">
          <div className="menu">
            <img
              className="menu-icon"
              alt="menu-icon"
              src="https://img.icons8.com/ios-filled/50/000000/menu.png"
            />
          </div>
          <div className="brand">
            <img
              className="brand-logo"
              src="https://cdn.shopify.com/s/files/1/0654/5561/t/2/assets/logo.svg?v=14866611707170068120"
              alt="brand-logo"
            />
          </div>
          <div className="cart">
            <span className="text">CART</span>
            <div className="items-count">{` ( ${1} )`}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Topbar
