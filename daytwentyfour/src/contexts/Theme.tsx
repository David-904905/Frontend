import { createContext, useState, FC, ReactNode } from "react";


type Theme = "light" | "dark";

interface ThemeContextType
{
    theme: Theme,
    toggleTheme: () => void;
}


interface Children
{
    children: ReactNode
}


export const ThemeContext = createContext<ThemeContextType | undefined >(undefined)



export const ThemeProvider: FC<Children> = ({children}) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme((previousTheme) => previousTheme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}