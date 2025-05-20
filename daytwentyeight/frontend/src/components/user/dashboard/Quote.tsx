import useFetchDailyQuote from "@hooks/useFetchDailyQuote";
import QuoteError from "./QuoteError";

// interface PayLoad
// {
//     q?: string,
//     a?: string,
// }

const Quote = () => {
  const { retrievedQuote, error } = useFetchDailyQuote();
  console.log(retrievedQuote);

  if (error !== "") {
    return <QuoteError />;
  }

  return (
    <>
      {!retrievedQuote && <p>loading...</p>}
      {retrievedQuote && (
        <div className="quote-container">
          <div className="quote-main">
            <p>{retrievedQuote["q"]}</p>
          </div>
          <div className="author">
            <h3>{retrievedQuote["a"]}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Quote;
