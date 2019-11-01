import { GET_PRODUCTS, SORT_BY } from '../actions/products';

export const products = (state = [], action) => {
  switch (action.type) {
  case GET_PRODUCTS:
    return action.products;

  case SORT_BY:
  {
    const {key, direction } = action;
    const sortedProducts = [...state].sort((a, b) => {
      if (a[key] > b[key]) return direction === 'asc'? 1 : -1;
      if (a[key] < b[key]) return direction == 'asc' ? -1 : 1;
      return 0;
    });
    return sortedProducts;
  }

  default:
    return state;
  }
};