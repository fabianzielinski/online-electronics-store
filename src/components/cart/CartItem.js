import React from 'react';
import PropTypes from 'prop-types';
import './CartItem.css';

export const CartItem = ({ product, onPlusClick, onMinusClick, onRemoveProductClick }) => {

  return (
    <li className="cart-item">
      <div className="row align-items-center">
        <div className="col-2">
          <div className="item-image-box" style={{ backgroundImage: 'url(' + product.imageUrl + ')' }}>
          </div>
        </div>
        <div className="col-10 product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="row">
            <div className="col-9">
              <p className="product-description">{product.description}</p>
            </div>
            <div className="col-1">
              <div className="product-price">${product.basePrice}</div>
            </div>
            <div className="col-2">
              <div className="cart-items-counter">
                <a href="#" className="cart-action-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    onPlusClick(product.id);
                  }} >+</a>
                <div>
                  <input className="counter-input" readOnly type="text" value={product.quantity} ></input>
                </div>
                <a href="#" className="cart-action-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    onMinusClick(product.id);
                  }}
                >-</a>
              </div>
              <a href="#" className="btn-remove"
                onClick={(e) => {
                  e.preventDefault();
                  onRemoveProductClick(product.id);
                }}
              >Remove from cart</a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  onRemoveProductClick: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired,
  onPlusClick: PropTypes.func.isRequired  
};