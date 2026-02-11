import { useEffect, useState } from "react";

type Quote = {
  text?: string;
  author?: string;
  tag?: string;
};

const QuoteBlock = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const getQuote = async () => {
      try {
        const response = await fetch(
          "https://jacintodesign.github.io/quotes-api/data/quotes.json",
        );
        const data: Quote[] = await response.json();

        if (data.length === 0) return;

        const motivationalQuotes = data.filter(
          (quote) => quote.tag === "motivational",
        );

        const randomQuote =
          motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

        setQuote(randomQuote);

      } catch (error) {
        console.error(error);
      }
    };

    getQuote();
  }, []);

  return (
    <>
      <blockquote className="quote-text">{quote?.text}</blockquote>
      <p className="quote-author">{quote?.author}</p>
    </>
  );
};

export default QuoteBlock;
