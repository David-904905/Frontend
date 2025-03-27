/* eslint-disable react-refresh/only-export-components */

import { createContext, useEffect, useState } from "react";

export const FilterContext = createContext()

export const FilterStateProvider = ({children}) => {
    const savedFilter = localStorage.getItem("filter") || "all";
    const [filter, setFilter] = useState(savedFilter);

    useEffect(() => {
        localStorage.setItem("filter", filter);
    }, [filter])

    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}   