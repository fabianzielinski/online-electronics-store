import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, QTY_MINUS, QTY_PLUS } from '../actions/cart';

const initialState = {
  addedIds: [],
  quantityPerId: {}
};

export function cart(state = initialState, action) {
  switch (action.type) {
  case ADD_TO_CART:
  {
    const { productId } = action;
    const addedIds = state.addedIds.indexOf(productId) === -1 ?
      [...state.addedIds, productId] : state.addedIds;
    const quantityPerId = { ...state.quantityPerId, [productId]: (state.quantityPerId[productId] || 0) + 1 };
    return { ...state, addedIds, quantityPerId };
  }
  case REMOVE_FROM_CART:
  {
    const { productId } = action;
    const addedIds = state.addedIds.filter(el => el !== productId);
    const quantityPerId = { ...state.quantityPerId, [productId]: 0 };
    return { ...state, addedIds, quantityPerId };
  }
  case QTY_PLUS:
  {
    const { productId } = action;
    const quantityPerId = { ...state.quantityPerId, [productId]: (state.quantityPerId[productId] || 0) + 1 };
    return { ...state, quantityPerId };
  }
  case QTY_MINUS:
  {
    const { productId } = action;
    const newQty = state.quantityPerId[productId] - 1;
    const quantityPerId = { ...state.quantityPerId, [productId]: newQty };
    const addedIds = newQty > 0 ? state.addedIds : state.addedIds.filter(el => el !== productId);
    return { ...state, addedIds, quantityPerId };
  }

  case EMPTY_CART:
    return initialState;

  default:
    return state;
  }
}