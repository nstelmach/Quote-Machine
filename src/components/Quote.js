import Button from "./Button";
import SocialIconLink from "./SocialIconLink";
import classes from "./Quote.module.css";

function Quote(props) {
  return (
    <div>
      <h1 className={classes.quoteText} id={props.textId}>
        "{props.text}"
      </h1>
      <h2 className={classes.quoteAuthor} id={props.authorId}>
        ~{props.author}
      </h2>
      <Button
        id="new-quote"
        title="New Quote"
        onClick={props.onNewQuoteClick}
      />
      <SocialIconLink
        id="tweet-quote"
        href="https://twitter.com/intent/tweet"
        iconClass="fa-brands fa-twitter"
      />
      <SocialIconLink
        id="tumblr-quote"
        href="https://tumblr.com/share"
        iconClass="fa-brands fa-tumblr"
      />
    </div>
  );
}

export default Quote;
