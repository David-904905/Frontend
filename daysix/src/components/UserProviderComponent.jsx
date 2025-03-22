import { useState, createContext } from "react";
import UserProfile from "./UserProfile";

export const UserContext = createContext();

const UserProviderComponent = () => {
    
    const [userName, setUserName] = useState("David Marshall");
    
    return (
        <>
          <UserContext.Provider value={{userName, setUserName}}>
            <UserProfile />
          </UserContext.Provider>
        </>
    )
}

export default UserProviderComponent;
