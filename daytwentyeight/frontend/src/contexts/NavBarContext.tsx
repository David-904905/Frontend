import type { Children, NavBarStruct } from "@interfaces/Interface";
import { useState, createContext } from "react";




export const MenuOpenContext = createContext<NavBarStruct | null>(null);

export const MenuOpenProvider = ({children}: Children) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return <MenuOpenContext.Provider value={{menuOpen, setMenuOpen}}>
        {children}
    </MenuOpenContext.Provider>
}

