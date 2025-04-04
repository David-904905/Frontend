import React, { createContext, ReactNode } from "react";
import { useState } from "react";
import { useEffect } from "react";

interface FormContextType {
    firstname: string;
    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    lastname: string;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    phone: string;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
    date: string;
    setDate: React.Dispatch<React.SetStateAction<string>>;
    registered: boolean;
    setRegistered: React.Dispatch<React.SetStateAction<boolean>>;

}

export const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormDataProviderProps
{
    children: ReactNode;
}

export const FormDataProvider: React.FC<FormDataProviderProps> = ({children}) => {

    const savedFname = localStorage.getItem("fname") || "";
    const savedLname = localStorage.getItem("lname") || "";
    const savedEmail = localStorage.getItem("email") || "";
    const savedPhone = localStorage.getItem("phone") || "";
    const savedDate = localStorage.getItem("date") || "";
    const savedRegistered = localStorage.getItem("registered") || "";


    const [firstname, setFirstName] = useState(savedFname);
    const [lastname, setLastName] = useState(savedLname);
    const [email, setEmail] = useState(savedEmail);
    const [phone, setPhone] = useState(savedPhone);
    const [date, setDate] = useState(savedDate);
    const [registered, setRegistered] = useState(savedRegistered === "true" ? true : false)

    useEffect(() => {

        localStorage.setItem("fname", firstname);
        localStorage.setItem("lname", lastname);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        localStorage.setItem("date", date);
        localStorage.setItem("registered", JSON.stringify(registered));
        
    }, [firstname, lastname, email, phone, date, registered])

    return (
        <FormContext.Provider value={{
            firstname,
            setFirstName,
            lastname,
            setLastName,
            email,
            setEmail,
            phone,
            setPhone,
            date,
            setDate,
            registered,
            setRegistered
        }}>
            {children}
        </ FormContext.Provider>
    )
}