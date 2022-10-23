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
      <div className={classes.buttonsWrapper}>
        <div className={classes.socialLinksWrapper}>
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
        <Button
          id="new-quote"
          title="New Quote"
          onClick={props.onNewQuoteClick}
        />
      </div>
    </div>
  );
}

export default Quote;
