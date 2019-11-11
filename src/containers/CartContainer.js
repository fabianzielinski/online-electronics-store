import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartItemsList from '../components/cart/CartItemsList';
import { removeFromCart, addCartItemQty, reduceCartItemQty } from '../actions/cart';

const CartContainer = ({ removeFromCart, products, addedIds, quantityPerId, addCartItemQty, reduceCartItemQty }) => {
  const cartProducts = products.filter((product) =>
    addedIds.find(
      (item) => item === product.id));
  const cartProductsWithQty = cartProducts.map((product) => ({ ...product, quantity: quantityPerId[product.id] }));
  const cartTotalAmt = cartProductsWithQty.reduce((acc,{basePrice,quantity})=> acc + (basePrice * quantity), 0);
  return (
    <CartItemsList
      removeFromCart={removeFromCart}
      cartProducts={cartProductsWithQty}
      addCartItemQty={addCartItemQty}
      reduceCartItemQty={reduceCartItemQty}
      totalAmount={cartTotalAmt} />
  );
};

CartContainer.propTypes = {
  products: PropTypes.array.isRequired,
  addedIds: PropTypes.array.isRequired,
  quantityPerId: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  addCartItemQty: PropTypes.func.isRequired,
  reduceCartItemQty: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.products,
  addedIds: state.cart.addedIds,
  quantityPerId: state.cart.quantityPerId
});

const mapDispatchToProps = {
  removeFromCart,
  reduceCartItemQty,
  addCartItemQty
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);