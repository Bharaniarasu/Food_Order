import classes from "./mealItem.module.css";
import MealItemForm from "./mealItemForm";

const MealItem = (props) => {
  //   const price = `₹${props.price.toFixed(2)}`;
  // console.log(props);
  return (
    <li>
      <div className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{props.price}</div>
        </div>
        <div>
          <MealItemForm {...props} />
        </div>
      </div>
    </li>
  );
};
export default MealItem;
