import { useContext } from "react";
import CartContext from "./cart_context";

const defaultCartContext = {
  items: [],
  totalAmount: 0,
};
const cartContext = (state, action) => {
  return defaultCartContext;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useContext(
    cartContext,
    defaultCartContext
  );
  const addToCartHandler = () => {};
  const removeFromCartHandler = () => {};
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
