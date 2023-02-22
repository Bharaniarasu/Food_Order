import classes from "./mealsSummary.module.css";
const MealsSummary = () => {
  return (
    <>
      <section className={classes.summary}>
        <h2>Delicious and healthy food </h2>
        <p>
          Choose your favourite meal in our broad section of available meals and
          enjoy a delicious lunch or Dinner{" "}
        </p>
        <p>All our meals are high-quality and very healthy.</p>
      </section>
    </>
  );
};
export default MealsSummary;
