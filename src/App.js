import { useState } from "react";
import Cart from "./cart/cart";
import Header from "./layout/header";
import Meals from "./meals/meals";
import "./styles.css";

export default function App() {
  const [cartShown, setCartShown] = useState(false);
  console.log(cartShown);
  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <>
      {cartShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}
