import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.showCart.cartIsShown);
  return (
    <React.Fragment>
      {showCart && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
      <footer className="footer">
        Project maintained by{" "}
        <a href="mailto: khmais.mrad@gmail.com">Khmais Mrad</a>
        <br />
        Project idea is by{" "}
        <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
          Maximilian Schwarzmüller
        </a>{" "}
        from Udemy.
        <br />
        <a href="https://github.com/khmais93">My Github profile</a>
      </footer>
    </React.Fragment>
  );
}

export default App;
