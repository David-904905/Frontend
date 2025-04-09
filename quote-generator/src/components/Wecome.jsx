import { useContext } from "react";

import "../style/welcome.css";
import { QuoteContext } from "../contexts/QuoteContext";

import Quote from "./Quote";


const Welcome = () => {

    const { showQuote, setShowQuote } = useContext(QuoteContext);

    const displayQuote = () => {
        setShowQuote(!showQuote)
    }

    return (
        <>
            {showQuote ? <Quote /> : (
                <section className="welcome">
                    <div className="header-sec">
                        <h2>Daily Quotes</h2>
                    </div>
                    <div className="message">
                        <p>Start your day with quotes from histories top figures, and partake in their wisdom </p>
                        <button onClick={displayQuote}>Click Here</button>
                    </div>
                </section>
            )}
        </>
    )
}

export default Welcome;