/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const InputQuery = createContext()

export const InputQueryStateProvider = ({children}) => {
    const inputValue = localStorage.getItem("query") || "";
    const [inputQuery, setInputQuery] = useState(inputValue);

    useEffect(() => {
        localStorage.setItem("query", inputQuery);

    }, [inputQuery])

    return  (
        <>
            <InputQuery.Provider value={{inputQuery, setInputQuery}}>
                {children}
            </InputQuery.Provider>
        </>
    )
}
