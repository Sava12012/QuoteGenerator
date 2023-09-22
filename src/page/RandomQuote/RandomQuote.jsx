import React, { useState, useEffect } from "react";
import "./RandomQuote.css";
import twitter_icon from "../../components/assets/twitterIcon.png";
import reload from "../../components/assets/reloadIcon.png";
import { fetchQuotes } from "../../API/randomQuoteAPI.js";

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "Difficult increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  });

  useEffect(() => {
    async function loadQuotes() {
      try {
        const quotes = await fetchQuotes();
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
      } catch (error) {
        console.error("Error fetching quotes:", error.message);
      }
    }

    loadQuotes();
  }, []);

  const random = () => {
    async function getRandomQuote() {
      try {
        const quotes = await fetchQuotes();
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
      } catch (error) {
        console.error("Error fetching quotes:", error.message);
      }
    }
    getRandomQuote();
  };


  const twitter = () => {
    window.open(
        `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`
    );
  };

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
