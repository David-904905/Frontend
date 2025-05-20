import useFetchDailyQuote from "@hooks/useFetchDailyQuote";
import QuoteError from "./QuoteError";

const Quote = () => {
  const { retrievedQuote, error } = useFetchDailyQuote();
  console.log(retrievedQuote);

  if (error) {
    return <QuoteError />;
  }

  if (!retrievedQuote) {
    return <p>loading...</p>;
  }

  return (
    <div className="quote-container">
      <div className="quote-main">
        <p>"{retrievedQuote.q}"</p>
      </div>
      <div className="author">
        <h3>{retrievedQuote.a}</h3>
      </div>
    </div>
  );
};

export default Quote;
