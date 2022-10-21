import classes from "./Button.module.css";

function Button(props) {
  return (
    <div className={classes.buttons}>
      <button className={classes.button} id={props.id} onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
}

export default Button;
