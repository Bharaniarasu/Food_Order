import { useContext, useReducer } from "react";
import CartContext from "./cart_context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if(action.type=="ADD"){
    const updatedItem=action.items.concat(action.item);
    const updatedTotalAmount=action.totalAmount+action.item.price*action.item.amount;
    return{items:updatedItem,totalAmount:updatedTotalAmount}
  }
  else if (action.id){

  }
  return defaultCartContext;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addToCartHandler = (item) => {dispatchCartAction({type:"ADD",item:item})};
  const removeFromCartHandler = (id) => {dispatchCartAction({type:"REMOVE",id:id})};
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
