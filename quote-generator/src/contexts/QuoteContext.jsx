import { createContext, useEffect, useState } from "react";

export const QuoteContext = createContext();

export const QuoteContextProvider = ({children}) => {
    const storedShowQuote = localStorage.getItem("choice") || false;
    const [showQuote, setShowQuote] = useState(storedShowQuote === 'true' ? true : false);

    useEffect(() => {
        localStorage.setItem("choice", JSON.stringify(showQuote));
    }, [showQuote])

    return <QuoteContext.Provider value={{showQuote, setShowQuote}}>
            {children}
        </QuoteContext.Provider>
}