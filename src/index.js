import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

import App from './components/App';
import './index.css';
import { fetchProducts } from './actions/products';

const store = createStore(
	reducer,
	applyMiddleware(thunk)
);

store.dispath(fetchProducts());
const rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	rootElement);


