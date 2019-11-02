import React from 'react';
import PropTypes from 'prop-types';
import Product from '../components/product/Product';
import { addToCart } from '../actions/cart';
import { connect } from 'react-redux';

const ProductDetailsContainer = ({ products, match, addToCart }) => {
  const prodId = match.params.id;
  const selectedProduct = products.find((product) => product.id == prodId);
  return (
    <Product product={selectedProduct} onAddToCartClick={addToCart} />
  );
};

ProductDetailsContainer.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductDetailsContainer);