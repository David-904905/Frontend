import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [username, setUserName] = useState("");

    return (
        <UserContext.Provider value={{username, setUserName}}>
            {children}
        </ UserContext.Provider>
    )
}

// The function above makes our code neater in that we dont have to use data.provider in our app.jsx, this function does it for us already
// we just need to reference our usercontext, and make use of it.