import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

const Product = ({ product, onAddToCartClick }) => {

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="col">
          <div className="product-image-box"></div>
        </div>
        <div className="col">
          <div className="product-details-box">
            <h1 className="product-name">{product.name}</h1>
            <div className="product-price">{product.basePrice}</div>
            <p className="product-description">
              {product.description}
            </p>
            <button className="add-to-cart"
              onClick={() => onAddToCartClick(product.id)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  onAddToCartClick: PropTypes.func
};

export default Product;