/* eslint-disable react-refresh/only-export-components */

import { createContext, useEffect, useState } from "react";

export const FilterContext = createContext()

export const FilterStateProvider = ({children}) => {
    const savedFilter = localStorage.getItem("filter") || "all";
    const savedColor = localStorage.getItem("color") || "colorall";
    const [filter, setFilter] = useState(savedFilter);
    const [colorFilter, setColorFilter] = useState(false);
    const [currentColor, setCurrentColor] = useState(savedColor);

    useEffect(() => {
        localStorage.setItem("filter", filter);
        localStorage.setItem("color", currentColor)

    }, [filter, currentColor])

    return (
        <FilterContext.Provider value={{filter, setFilter, colorFilter, setColorFilter, currentColor, setCurrentColor}}>
            {children}
        </FilterContext.Provider>
    )
}   