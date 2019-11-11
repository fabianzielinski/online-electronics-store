  
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductBox from './ProductBox';
import Pagination from './Pagination';

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      favouriteList: [1, 4],
      activePage: 1
    };
    this.maxProdDisplay = 6;
  }

  changePage(pageNum) {
    this.setState({ activePage: pageNum });
  }

  renderProductsToDisplay() {
    const end = this.state.activePage * this.maxProdDisplay;
    const start = end - this.maxProdDisplay;
    const prodToDisplay = this.props.products.slice(start, end);
    const productList = prodToDisplay.map(product => {
      let isFavourite = this.state.favouriteList.includes(product.id);
      return (
        <ProductBox
          key={product.id}
          product={product} isFavourite={isFavourite}
          onAddToCartClick={(productId) => this.props.addToCart(productId)}
        />
      );
    });
    return productList;
  }

  render() {
    return (
      <div className="product-list">
        <div className="row">
          {this.renderProductsToDisplay()}
        </div>
        <Pagination pageCount={Math.ceil(this.props.products.length / this.maxProdDisplay)}
          onPageNumClick={(pageNum) => this.changePage(pageNum)}
          activePage={this.state.activePage} />
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
};