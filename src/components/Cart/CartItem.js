import _ from "lodash";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../actions/cart";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const meal = props.meal;
  const modifiedMealObj = _.omit(meal, ["amount"]);
  const addHandler = (e) => {
    e.preventDefault();
    dispatch(addItem(modifiedMealObj, 1));
  };
  const removeHandler = (e) => {
    e.preventDefault();
    dispatch(removeItem(modifiedMealObj, 1));
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price.toFixed(2)}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeHandler}>−</button>
        <button onClick={addHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
