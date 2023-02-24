import Input from "../../ui/input";
import classes from "./mealItemForm.module.css";

const MealItemForm = (props) => {
  //   console.log(props);

  return (
    <form className={classes.form}>
      <Input
        label="amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};
export default MealItemForm;
