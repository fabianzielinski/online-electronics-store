import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ProductList } from '../components/home/ProductList';
import { addToCart } from '../actions/cart';

const ProductListContainer = ({ products, addToCart }) => {
  return <ProductList products={products} addToCart={addToCart}/>;
};

ProductListContainer.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductListContainer);