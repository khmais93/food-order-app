import _ from "lodash";
import { REMOVE_ITEM, ADD_ITEM, ORDER_ITEM } from "./../actions/cart";

const initialState = {
  items: {},
  totalAmount: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (state.items && Object.keys(state.items).includes(action.meal.id)) {
        return {
          ...state,
          items: {
            ...state.items,
            [action.meal.id]: {
              ...action.meal,
              amount: state.items[action.meal.id].amount + action.quantity,
            },
          },
          totalAmount:
            +state.totalAmount.toFixed(2) + action.meal.price * action.quantity,
        };
      }
      return {
        ...state,
        items: {
          ...state.items,
          [action.meal.id]: { ...action.meal, amount: action.quantity },
        },
        totalAmount:
          +state.totalAmount.toFixed(2) + action.meal.price * action.quantity,
      };
    case REMOVE_ITEM:
      if (state.items[action.meal.id].amount === 1) {
        return {
          ...state,
          items: _.omit(state.items, [action.meal.id]),
          totalAmount: +state.totalAmount.toFixed(2) - action.meal.price,
        };
      }
      return {
        ...state,
        items: {
          ...state.items,
          [action.meal.id]: {
            ...action.meal,
            amount: state.items[action.meal.id].amount - 1,
          },
        },
        totalAmount: +state.totalAmount.toFixed(2) - action.meal.price,
      };
    case ORDER_ITEM:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
