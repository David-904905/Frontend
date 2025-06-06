import { createContext, useState, useEffect } from "react";


export const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const storedClicked = localStorage.getItem("clicked") || "home";

    const [clickedLink, setClickedLink] = useState(storedClicked);

    useEffect(() => {
        // Store the clicked link in localStorage
        localStorage.setItem("clicked", clickedLink);
    }, [clickedLink]);
    return (
        <NavBarContext.Provider value={{ clickedLink, setClickedLink, menuOpen, setMenuOpen }}>
            {children}
        </NavBarContext.Provider>
    )
}