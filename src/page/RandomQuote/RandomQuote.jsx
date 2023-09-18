import { useState } from "react";
import "./RandomQuote.css";
import twitter_icon from "../../components/assets/twitterIcon.png";
import reload from "../../components/assets/reloadIcon.png";

const RandomQuote = () => {
  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const [quote, setQuote] = useState({
    text: "Difficult increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${
        quote.text
      } - ${quote.author.replace(", type.fit", "")}`
    );
  };

  loadQuotes();

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">
            -{" "}
            {quote.author === "type.fit"
              ? "Unknown Author"
              : quote.author.replace(", type.fit", "")}
          </div>

          <div className="icons">
            <img
              src={reload}
              onClick={() => {
                random();
              }}
              alt=""
            />
            <img
              src={twitter_icon}
              onClick={() => {
                twitter();
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
