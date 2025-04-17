import { FormEvent, useRef, useState } from "react";

import "../styles/form.css";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submittedData, setSubmittedData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const nameValue = name.current!.value; // the !. means this value will never be none
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <>
      <section className="form">
        {submittedData.name === "" ? (
          ""
        ) : (
          <div className="displayDetails">
            <h2>Name: {submittedData.name}</h2>
            <p>Email: {submittedData.email}</p>
            <p>Password: {submittedData.password}</p>
          </div>
        )}
        <div className="form-container">
            <div className="header">
                <h2 style={{"textAlign": "center"}}>Welcome</h2>
                <p>fill this form to continue</p>
            </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <br />
            <input type="text" required id="name" ref={name} />
            <br />
            <label htmlFor="email">Email: </label>
            <br />
            <input type="email" required id="email" ref={email} />
            <br />
            <label htmlFor="password">Password: </label>
            <br />
            <input type="password" required id="password" ref={password} />
            <br />
            <button>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;

//
