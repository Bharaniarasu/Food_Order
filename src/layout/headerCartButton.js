import { useContext } from "react";
import CartIcon from "../cart/cartIcon";
import CartContext from "../store/cart_context";
import classes from "./headerCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
