import React, { Component } from 'react';
import ProductListContainer from '../../containers/ProductList';
import SortingWidgetContainer from '../../containers/SortingWidgetContainer';
import './HomePage.css';

export default class HomePage extends Component {

  render() {
    return (
      <div className="home-page">
        <div className="row">
          <aside className="col-md-3 col-sm-12 left-sidebar">
            <SortingWidgetContainer />
          </aside>
          <section className="col-md-9 col-sm-12 products-section">
            <ProductListContainer />
          </section>
        </div>
      </div>
    );
  }
}