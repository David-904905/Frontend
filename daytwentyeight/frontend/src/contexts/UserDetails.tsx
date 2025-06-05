import type { Children, UserDetails } from "@interfaces/Interface";
import { createContext, useState } from "react";

const bioPlaceholder: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velea alias, laboriosam corporis officia esse minus magnam earumblanditiis saepe rerum mollitia. Sunt est tempora vel deseruntminima voluptatibus blanditiis quam a distinctio error, quisquamminus necessitatibus consectetur odit ipsam perferendis iusto sitexercitationem esse sint laudantium iste placeat."

export const UserContext = createContext<UserDetails | undefined>(undefined);

export const UserDetailsProvider = ({children}: Children) => {
    // implement this function
    // const fetchUserDetails = async (token: string) => {
    // }
    
    const [name, setName] = useState<string>("David Nduonofit");
    const [email, setEmail] = useState<string>("davidnduonofit47@gmail.com");
    const [bio, setBio] = useState<string>(bioPlaceholder);
    const [profileImage, setProfileImage] = useState<string>('https://placehold.co/100');

    return (
        <UserContext.Provider value={{name, setName, bio, setBio, profileImage, setProfileImage, email, setEmail}}>
            {children}
        </UserContext.Provider>
    )
}