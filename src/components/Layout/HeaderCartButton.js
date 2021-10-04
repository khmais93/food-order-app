import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon, Label } from "semantic-ui-react";
import { toggleCart } from "../../actions/showCart";
import _ from "lodash";

function HeaderCartButton() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);
  let sum = 0;

  if (!_.isEmpty(items)) {
    const values = Object.values(items);
    sum = values.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.amount;
    }, 0);
  }

  // console.log(itemsQuantity);
  const clickHandler = () => {
    dispatch(toggleCart());
  };
  return (
    <React.Fragment>
      <Button as="div" labelPosition="left">
        <Label as="a" basic pointing="right">
          {sum} items
        </Label>
        <Button animated="vertical" onClick={clickHandler}>
          <Button.Content hidden>Shop</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
      </Button>
    </React.Fragment>
  );
}

export default HeaderCartButton;
