import React, { useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "./../UI/Input";
import { useDispatch } from "react-redux";
import { addItem } from "../../actions/cart";

function MealItemForm(props) {
  const { meal } = props;
  const quantityRef = useRef(null);
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    const quantity = quantityRef.current.value * 1;
    dispatch(addItem(meal, quantity));
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        ref={quantityRef}
        input={{
          id: "amount_" + props.meal.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={clickHandler}>+ Add</button>
    </form>
  );
}

export default MealItemForm;
