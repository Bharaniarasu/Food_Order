import CartIcon from "../cart/cartIcon";
import classes from "./headerCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>2</span>
    </button>
  );
};
export default HeaderCartButton;
