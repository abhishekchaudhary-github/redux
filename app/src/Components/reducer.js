import cart from "./cartItems";

import {
  decrease,
  increase,
  amountIncrease,
  remove,
  clear_cart,
} from "./action";

const initialState = {
  count: 0,
  totalPrice: 0,
  cart: cart,
};

function reducer(state = initialState, action) {
  if (action.type === decrease) {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === increase) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === clear_cart) {
    return { ...state, cart: [] };
  }

  if (action.type === remove) {
    return {
      ...state,
      cart: state.cart.filter((el) => el.id !== action.payload.id),
    };
  }
  return state;
}

export default reducer;
