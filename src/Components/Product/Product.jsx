import React, { Component } from 'react'
import './Product.scss'

class Product extends Component {
  state = {
    prdHovered: false
  }

  onProductHover = () => {
    this.setState({ prdHovered: true })
  }

  onProductHoverFinish = () => {
    this.setState({ prdHovered: false })
  }

  render() {
    const { title, imgURL } = this.props
    const { prdHovered } = this.state
    return (
      <div
        onMouseEnter={this.onProductHover}
        onMouseLeave={this.onProductHoverFinish}
        className="prd"
      >
        <div
          style={{ visibility: `${prdHovered ? 'initial' : 'hidden'}` }}
          className="prd-title"
        >
          {title}
        </div>
        <div className="prd-img-container">
          <img src={imgURL} alt="product-img" className="prd-img" />
        </div>
      </div>
    )
  }
}

export default Product
