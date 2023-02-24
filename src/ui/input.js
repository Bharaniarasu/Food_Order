import classes from "./input.module.css";

const Input = (props) => {
  //   console.log(props.label);
  return (
    <>
      <label htmlFor={props.label}>{props.label}</label>
      <input {...props.input} />
    </>
  );
};
export default Input;
