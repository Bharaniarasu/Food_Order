import Modal from "../ui/modal";
import classes from "./cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "u1", name: "sample", price: 12.33 }].map((item) => (
        <li className={classes.cart_items} key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>345.2</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button__alt} onClick={props.onHideCart}>
          close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
