import { useState, createContext, type SetStateAction } from "react";


interface NavBarStruct
{
    menuOpen: boolean
    setMenuOpen: React.Dispatch<SetStateAction<boolean>>
}

interface Children
{
    children: React.ReactNode
}

export const MenuOpenContext = createContext<NavBarStruct | null>(null);

export const MenuOpenProvider = ({children}: Children) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return <MenuOpenContext.Provider value={{menuOpen, setMenuOpen}}>
        {children}
    </MenuOpenContext.Provider>
}

