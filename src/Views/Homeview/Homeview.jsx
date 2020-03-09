import React, { Component } from 'react'
import './Homeview.scss'
import Product from '../../Components/Product/Product'

class Homeview extends Component {
  state = {
    featuredProducts: [
      {
        name: 'VINCE',
        image:
          '//cdn.shopify.com/s/files/1/0654/5561/products/VINCE_KR027_SAPPHIRE_C1_54-19-140_grande.jpg?v=1489227561'
      },
      {
        name: 'DREW',
        image:
          '//cdn.shopify.com/s/files/1/0654/5561/products/DREW_KRS026_NOIR_C1_53-20-140_grande.jpg?v=1489227424'
      },
      {
        name: 'ELLA',
        image:
          '//cdn.shopify.com/s/files/1/0654/5561/products/ELLA_KR025_WOOD_C1_50-17-140_d0315e66-9658-428b-8cd8-513fd8e8fe87_grande.jpg?v=1489227490'
      },
      {
        name: 'COLETTE',
        image:
          '//cdn.shopify.com/s/files/1/0654/5561/products/COLETTE_KRS023_GRANITE_C1-_49-19-140_grande.jpg?v=1489227330'
      },

      {
        name: 'COLETTE',
        image:
          '//cdn.shopify.com/s/files/1/0654/5561/products/COLETTE_KR023_GRANITE_C1_49-19-140_grande.jpg?v=1489227246'
      },
      {
        name: 'BENNY',
        image:
          '//cdn.shopify.com/s/files/1/0654/5561/products/BENNY_KRS024_CHARCOAL_C1_-_51-20-140_grande.jpg?v=1489227115'
      },
      {
        name: 'BENNY',
        image:
          '//cdn.shopify.com/s/files/1/0654/5561/products/BENNY_KR024_CHARCOAL_C1_51-20-140_grande.jpg?v=1489226663'
      },
      {
        name: 'FINN',
        image:
          '//cdn.shopify.com/s/files/1/0654/5561/products/BURNTRX-FRONT_9af36b95-4b9c-4a7e-b592-bad751873caf_grande.jpg?v=1463783219'
      },
      {
        name: 'AUGUST',
        image:
          '//cdn.shopify.com/s/files/1/0654/5561/products/NOIR-FRONT_f848ee96-5c9b-4dd1-8851-5bb3707890b2_grande.jpg?v=1463781933'
      }
    ]
  }
  render() {
    const { featuredProducts } = this.state
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
        <section className="featured-prds">
          <div className="container">
            <h2 className="title">FEATURED PRODUCTS</h2>
            <div className="prds-colln">
              {featuredProducts.map((prd, i) => (
                <Product key={i} title={prd.name} imgURL={prd.image} />
              ))}
            </div>
            <button className="view-colln-btn">VIEW THE COLLECTION</button>
          </div>
        </section>
        <section className="extra-showcase"></section>
        <section className="contact">
          <div className="container">
            <h2 className="top-text">CONTACT US</h2>
            <hr className="line"/>
            <h3 className="number">T.866.604.5700</h3>
            <div className="mail">SALES@KINGSLEYROWE.COM</div>
          </div>
        </section>
      </div>
    )
  }
}

export default Homeview
