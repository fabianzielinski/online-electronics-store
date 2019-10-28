import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import Contact from './components/Contact';
import CartPage from './components/cart/CartPage';
import ProductDetailsContainer from './containers/ProductDetails';
import NoMatch from './components/NoMatch';

export default (
  <Switch>
    <Route exact path={'/'} component={HomePage} />
    <Route exact path={'/contact'} component={Contact} />
    <Route exact path={'/cart'} component={CartPage} />
    <Route exact path={'/product/:id'} component={ProductDetailsContainer} />
    <Route component={NoMatch} />
  </Switch>
);		