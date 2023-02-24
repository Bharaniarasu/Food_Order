import classes from "./header.module.css";
import Meals from "../assets/images/meals.jpg";
import HeaderCartButton from "./headerCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals Ready</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={Meals} />
      </div>
    </>
  );
};

export default Header;
