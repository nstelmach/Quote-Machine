import classes from "./SocialIconLink.module.css";

function SocialIconLink(props) {
  return (
    <div className={classes.buttons}>
      <a
        className={classes.button}
        id={props.id}
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        <i className={props.iconClass}></i>
      </a>
    </div>
  );
}

export default SocialIconLink;
