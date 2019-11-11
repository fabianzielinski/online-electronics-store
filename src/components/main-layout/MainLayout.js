import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { Footer } from './Footer';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;