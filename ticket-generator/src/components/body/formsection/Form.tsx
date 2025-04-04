import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FormContext } from "../../../contexts/FormDataProvider";
import Ticket from "../ticketorwelcome/Ticket";

const Form = () => {

  // const registeredStored = localStorage.getItem("registered");
  const context = useContext(FormContext);
  const [registered, setRegistered] = useState(false);

  const [vfname, setVFname] = useState(false);
  const [vlname, setVLname] = useState(false);
  const [vemail, setVEmail] = useState(false);
  const [vphone, setVPhone] = useState(false);
  const [vdate, setVDate] = useState(false);

  useEffect(() => {
    localStorage.setItem("registered", JSON.stringify(registered));
  }, [registered])

  if (!context) {
    return "";
  }

  const {
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
  } = context;

  const validateDate = (ursDate: string): boolean => {
    const currentDate = new Date();
    const userDate = new Date(ursDate);

    userDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    return userDate > currentDate;
  };

  const validateFirstName = (name: string): boolean => {
    const firstNameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    return firstNameRegex.test(name);
  };

  const validateLastName = (name: string): boolean => {
    const lastNameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    return lastNameRegex.test(name);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneNumberRegex =
      /^(\+234|0)(70|80|81|90|91|92|93|94|95|96|97|98|99)[0-9]{8}$/;
    return phoneNumberRegex.test(phone);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!validateFirstName(firstname))
    {
      setVFname(true);
      return;
    }
    else if(!validateLastName(lastname))
    {
      setVLname(true);
      return;
    }
    else if(!validateEmail(email))
    {
      setVEmail(true);
      return;
    }
    else if(!validatePhone(phone))
    {
      setVPhone(true);
      return;
    }
    else if(!validateDate(date))
    {
      setVDate(true);
      return;
    }
    window.alert("Your registeration was successful");
    setRegistered(true);
  };
  return (
    <>
      {registered ? (
        <Ticket />
      ) : (
        <section className="formsection">
          <form action="" onSubmit={HandleSubmit} className="register">
            <label htmlFor="firstname">Firstname: </label>
            <br />
            <input
              type="text"
              id="firstname"
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            {vfname ? (
              <p>
                The first name you entered is invalid, should start with an
                alphabet and be a min of 1
              </p>
            ) : (
              ""
            )}
            <br />
            <label htmlFor="lastname">Surname: </label>
            <br />
            <input
              type="text"
              id="lastname"
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            {vlname ? (
              <p>
                The surname you entered is invalid, should start with an
                alphabet and be a min of 1
              </p>
            ) : (
              ""
            )}
            <br />
            <label htmlFor="email" id="email">
              Email:
            </label>
            <br />
            <input
              type="text"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {vemail ? <p>The email you entered is invalid</p> : ""}
            <br />
            <label htmlFor="phone">Phone: </label>
            <br />
            <input
              type="text"
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            {vphone ? <p>The phone number you entered is invalid</p> : ""}
            <br />
            <label htmlFor="date">Date: </label>
            <br />
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <br />
            {vdate ? <p>The date you entered is invalid</p> : ""}
            <br />
            <button type="submit">Submit</button>
          </form>
        </section>
      )}
    </>
  );
};

export default Form;
