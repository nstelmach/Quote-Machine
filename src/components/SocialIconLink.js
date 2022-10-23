import classes from "./SocialIconLink.module.css";

function SocialIconLink(props) {
  return (
    <a
      className={classes.button}
      id={props.id}
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      <i className={props.iconClass}></i>
    </a>
  );
}

export default SocialIconLink;
