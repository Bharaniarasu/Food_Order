import classes from "./mealItem.module.css";

const MealItem = (props) => {
  //   const price = `₹${props.price.toFixed(2)}`;
  console.log(props);
  return (
    <li>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
    </li>
  );
};
export default MealItem;
