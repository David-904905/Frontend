import { createContext, useState } from "react";
import React from "react";

const bioPlaceholder: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velea alias, laboriosam corporis officia esse minus magnam earumblanditiis saepe rerum mollitia. Sunt est tempora vel deseruntminima voluptatibus blanditiis quam a distinctio error, quisquamminus necessitatibus consectetur odit ipsam perferendis iusto sitexercitationem esse sint laudantium iste placeat."

interface UserDetails
{
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    bio: string,
    setBio: React.Dispatch<React.SetStateAction<string>>,
}

interface ChildrenStructure
{
    children: React.ReactNode
}



export const UserContext = createContext<UserDetails | undefined>(undefined);


export const UserDetailsProvider = ({children}: ChildrenStructure) => {
    const [name, setName] = useState<string>("David Nduonofit");
    const [bio, setBio] = useState<string>(bioPlaceholder);
    

    return (
        <UserContext.Provider value={{name, setName, bio, setBio}}>
            {children}
        </UserContext.Provider>
    )
}