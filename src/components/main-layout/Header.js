import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import CartIcon from 'react-ionicons/lib/IosBasketOutline';
import CartCounterContainer from '../../containers/CartCounterContainer';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <Link className="logo-link" to="/" col-md-4 col-sm-12>
            <div className="logo" style={{ backgroundImage: "url('../images/Logo.png')" }}></div>
          </Link>
          <nav className="navbar" col-md-8 col-sm-12>
            <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
            <NavLink className="nav-link" exact to="/faq" activeClassName="active">FAQ</NavLink>
            <NavLink className="nav-link" exact to="/contact" activeClassName="active">Contact</NavLink>
            <CartCounterContainer />
          </nav>
        </div>
      </div>
    </header>
  );
};

export const CartCounter = ({cartTotalQty}) => {
  return (
    <NavLink className="nav-link shopping-cart-link" exact to="/cart" activeClassName="active">
      <CartIcon className="shopping-cart-icon" fontSize="32px" title="Shopping cart" />
      {cartTotalQty !== 0 ? <span className="shopping-cart-counter">{cartTotalQty}</span> : ''}
    </NavLink>
  );
};

CartCounter.propTypes = {
  cartTotalQty: PropTypes.number.isRequired
};

export default Header;