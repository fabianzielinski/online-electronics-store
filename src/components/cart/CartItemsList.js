import React from 'react';
import PropTypes from 'prop-types';
import { CartItem } from './CartItem';
import './CartItemsList.css';

const CartItemsList = ({ cartProducts, addCartItemQty, reduceCartItemQty, removeFromCart, totalAmount }) => {
  const hasProducts = cartProducts.length !== 0;
  const listContent = hasProducts ? (cartProducts.map(item => {
    return <CartItem key={item.id}
      product={item}
      onPlusClick={addCartItemQty}
      onMinusClick={reduceCartItemQty}
      onRemoveProductClick={removeFromCart}
    />;
  })) : (
    <div className="cart-empty">Your shopping cart is empty.</div>
  );
  return (
    <div>
      <ul className="cart-items-list">
        {listContent}
      </ul>
      <div className="row justify-content-end ">
        <div className="cart-summary">
          <input className="discount-code" type="text" placeholder="discount code"></input>
          <div className="total-amount">Total: $ {totalAmount}</div>
          <button className="checkout-btn" href="#">Checkout</button>
        </div>
      </div>
    </div>
  );
};

CartItemsList.propTypes = {
  cartProducts: PropTypes.array.isRequired,
  addCartItemQty: PropTypes.func.isRequired,
  reduceCartItemQty: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  totalAmount: PropTypes.number
};
export default CartItemsList;