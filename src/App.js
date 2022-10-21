import { useCallback, useEffect, useState } from "react";
import Wrapper from "./components/Wrapper";
import Quote from "./components/Quote";

function App(props) {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchQuotesHandler = useCallback(async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const data = await response.json();

    setIndex(Math.floor(Math.random() * data.quotes.length));
    setQuotes(data.quotes);
  }, []);

  useEffect(() => {
    fetchQuotesHandler();
  }, [fetchQuotesHandler]);

  function onNewQuoteClickHandler() {
    setIndex(Math.floor(Math.random() * quotes.length));
  }

  return (
    <Wrapper id="quote-box">
      <Quote
        textId="text"
        authorId="author"
        text={quotes[index]?.quote}
        author={quotes[index]?.author}
        onNewQuoteClick={onNewQuoteClickHandler}
      />
    </Wrapper>
  );
}

export default App;
