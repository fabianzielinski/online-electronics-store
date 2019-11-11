export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const EMPTY_CART = 'EMPTY_CART';
export const QTY_MINUS = 'QTY_MINUS';
export const QTY_PLUS = 'QTY_PLUS';

export const addToCart = productId => {
  return {
    type: ADD_TO_CART,
    productId
  };
};

export const removeFromCart = productId => {
  return {
    type: REMOVE_FROM_CART,
    productId
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART
  };
};

export const reduceCartItemQty = productId => {
  return {
    type: QTY_MINUS,
    productId
  };
};

export const addCartItemQty = productId => {
  return {
    type: QTY_PLUS,
    productId
  };
};
