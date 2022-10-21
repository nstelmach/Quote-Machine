import classes from "./Wrapper.module.css";

function Wrapper(props) {
  return (
    <div className={classes.quoteBox} id={props.id}>
      {props.children}
    </div>
  );
}

export default Wrapper;
