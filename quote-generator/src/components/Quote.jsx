import useFetchQuote from "../hooks/FetchQuote";
import { QuoteContext } from "../contexts/QuoteContext";
import "../style/quote.css";
import { useContext, useState, useEffect } from "react";

const Quote = () => {
    const quotes = useFetchQuote('https://dummyjson.com/quotes');
    const { showQuote, setShowQuote } = useContext(QuoteContext);
    const [index, setIndex] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (quotes && quotes.length > 0) {
            setIndex(Math.floor(Math.random() * quotes.length));
            setIsLoading(false);
        }
    }, [quotes]);

    const generateRandomQuote = () => {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * quotes.length);
        } while (randomNumber === index); // Ensure new index is different from the current one
        setIndex(randomNumber);
    };

    const toggleQuote = () => {
        setShowQuote(!showQuote);
    };

    if (isLoading) {
        return <p>Loading quotes...</p>;
    }

    if (!quotes || quotes.length === 0) {
        return <p>No quotes available.</p>;
    }

    return (
        <section className="quote-section">
            <div className="quote-container">
                <div className="quote-sec">
                    <div className="quote">
                        <p>{quotes[index].quote}</p>
                        <p>{quotes[index].author}</p>
                    </div>
                </div>
                <div className="button-back">
                    <button className="generate-btn" onClick={generateRandomQuote}>
                        Generate New Quote
                    </button>
                    <p>
                        Want to go back?{" "}
                        <span
                            onClick={toggleQuote}
                            style={{ color: "crimson", cursor: "pointer" }}
                        >
                            click here
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Quote;
