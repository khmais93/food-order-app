export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const ORDER_ITEM = "ORDER_ITEM";

export function addItem(meal, quantity) {
  return {
    type: ADD_ITEM,
    meal,
    quantity,
  };
}

export function removeItem(meal) {
  return {
    type: REMOVE_ITEM,
    meal,
  };
}

export function orderItems() {
  return {
    type: ORDER_ITEM,
  };
}
