import { useContext } from "react";
import { MenuOpenContext } from "@contexts/NavBarContext";

export const useMenuOpen = () => {
    const context = useContext(MenuOpenContext);

    if(!context)
    {
        throw new Error("useMenuOpen must be used within a MenuOpenProvider");
    }
    return context;
}