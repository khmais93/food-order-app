import { TOGGLE_CART } from "./../actions/showCart";

const initialState = { cartIsShown: false };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        cartIsShown: !state.cartIsShown,
      };

    default:
      return state;
  }
};
