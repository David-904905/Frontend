import React, { useContext } from "react";
import { useState } from "react";
import { FormContext } from "../../../contexts/FormDataProvider";
import Ticket from "../ticketorwelcome/Ticket";

const Form = () => {
  const context = useContext(FormContext);
  const [registered, setRegistered] = useState(false);

  const [vfname, setVFname] = useState(true);
  const [vlname, setVLname] = useState(true);
  const [vemail, setVEmail] = useState(true);
  const [vphone, setVPhone] = useState(true);
  const [vdate, setVDate] = useState(true);

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
    const date = new Date();
    return true;
  };

  const validateFirstName = (name: string): boolean => {
    return true;
  };

  const validateLastName = (name: string): boolean => {
    return true;
  };

  const validatePhone = (name: string): boolean => {
    return true;
  };

  const validateEmail = (name: string): boolean => {
    return true;
  };

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
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
          <p>
            The first name you entered is invalid, should start with an alphabet
            and be a min of 1
          </p>
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
          <p>
            The surname you entered is invalid, should start with an alphabet
            and be a min of 1
          </p>
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
          <p>The email you entered is invalid</p>
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
          <p>The phone number you entered is invalid</p>
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
          <p>The date you entered is invalid</p>
          <br />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Form;
