import getProducts from '../api/shopApi';

// Actions constants
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SORT_BY = 'SORT_BY';

// Action creators
export const receiveProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    products
  };
};

export const sortBy = (key, direction) => {
  return {
    type: SORT_BY,
    key,
    direction
  };
};

export const fetchProducts = () => dispatch => {
  getProducts(products => {
    dispatch(receiveProducts(products));
  });
};

export const getAllProducts = () => dispatch => {
  getProducts(products => {
    dispatch(receiveProducts(products));
  });
};
