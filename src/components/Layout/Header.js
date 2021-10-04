import React, { Fragment } from "react";
import mealsImgae from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 style={{ marginBottom: "0" }}>reactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImgae} alt="A table full of food" />
      </div>
    </Fragment>
  );
}

export default Header;
