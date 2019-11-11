import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../components/main-layout/Header';
import { CartCounter } from '../components/main-layout/Header';

const CartCounterContainer = ({quantityPerId}) => {
  const valArray = Object.values(quantityPerId);
  const cartTotalQty = valArray.length !== 0 ? valArray.reduce((total, val) => total + val) : 0;
  return (
    <CartCounter cartTotalQty={cartTotalQty}/>
  );
};

CartCounterContainer.propTypes = {
  quantityPerId: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  quantityPerId: state.cart.quantityPerId
});

export default connect(
  mapStateToProps
)(CartCounterContainer);
