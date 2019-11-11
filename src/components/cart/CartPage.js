import React from 'react';

import './Cart.css';
import  CartContainer  from '../../containers/CartContainer';

const CartPage = () => {

  return (
    <div className="shopping-cart">
      <header className="shopping-cart-header">
        <h1 className="page-name">Shopping Cart</h1>
      </header>
      <section className="shopping-cart-body">
        <CartContainer />
      </section>
    </div>
  );
};

export default CartPage;