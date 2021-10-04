import { combineReducers } from "redux";
import cart from "./cart";
import showCart from "./showCart";

export default combineReducers({
  cart,
  showCart,
});
