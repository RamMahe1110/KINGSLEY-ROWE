import React, { Component } from 'react'
import './Homeview.scss'

class Homeview extends Component {
  state = {}
  render() {
    return (
      <div className="homeview">
        <header className="homeview-header">
          <img
            src={require('../../assets/icons/play-vid.png')}
            alt="play-vid"
            className="play-vid"
          />
          <img
            src={require('../../assets/icons/down.png')}
            alt="down"
            className="down"
          />
          <div className="showcase">
            <img
              className="hero"
              src="//cdn.shopify.com/s/files/1/0654/5561/t/2/assets/home-cover-video-placeholder_1920x1000.jpg?v=13672902706234914424"
              alt="showcase"
            />
          </div>
        </header>
        <section className="shopping-guide">
          <div className="container">
            <h3 className="info">SHOP THE FULL COLLECTION</h3>
            <h3 className="info">AND OUR NEWEST STYLES</h3>
            <h3 className="info">DESIGNED IN LOS ANGELES</h3>
          </div>
        </section>
        <section className="gender-guide">
          <div className="gender-nav">
            <button className="gender-nav-btn">WOMEN</button>
            <button className="gender-nav-btn">MEN</button>
          </div>
        </section>
      </div>
    )
  }
}

export default Homeview
