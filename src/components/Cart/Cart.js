import classes from "./Cart.module.css";
import Modal from "./../UI/Modal";
import { toggleCart } from "../../actions/showCart";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useState } from "react";
import { orderItems } from "../../actions/cart";

const Cart = (props) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const items = useSelector((state) => state.cart.items);
  const [ordered, setOredered] = useState(false);

  const clickHandler = () => {
    dispatch(toggleCart());
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {Object.values(items).map((item) => (
        <CartItem
          meal={item}
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {ordered ? (
        <div className={classes.actions}>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Order success.
          </div>
          <button
            className={classes["button--alt"]}
            onClick={() => {
              clickHandler();
              setOredered(false);
            }}
          >
            Close
          </button>
        </div>
      ) : (
        <>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount.toFixed(2)}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={clickHandler}>
              Close
            </button>
            {totalAmount !== 0 && (
              <button
                onClick={() => {
                  setOredered(true);
                  dispatch(orderItems());
                }}
                className={classes.button}
              >
                Order
              </button>
            )}
          </div>
        </>
      )}
    </Modal>
  );
};

export default Cart;
