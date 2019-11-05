import React, { Component } from 'react';
import ProductListContainer from '../../containers/ProductList';
import SortingWidgetContainer from '../../containers/SortingWidgetContainer';
import './HomePage.css';

export default class HomePage extends Component {

  render() {
    return (
      <div className="home-page">
        <div className="row">
          <aside className="col-3 left-sidebar">
            <SortingWidgetContainer />
          </aside>
          <section className="col-9 products-section">
            <ProductListContainer />
          </section>
        </div>
      </div>
    );
  }
}