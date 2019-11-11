import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '../routes';
import MainLayout from './main-layout/MainLayout';


class App extends Component {
  render() {
    return (
      <Router routes={routes}>
        <MainLayout>
          {routes}
        </MainLayout>
      </Router>
    );
  }
}

export default App;