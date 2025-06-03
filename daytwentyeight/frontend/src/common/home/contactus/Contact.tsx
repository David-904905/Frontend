// styling
import "@css/contactus.css";

// react
import { useState, type FormEvent } from "react";

// hooks
import { useMenuOpen } from "@hooks/useMenuOpen";

// axios
import axios from "axios";

// payloads
import type { ContactUsPayload } from "@interfaces/Interface";

const Contact = () => {
  const { setMenuOpen } = useMenuOpen();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSumbit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: ContactUsPayload = {
      name: name,
      email: email,
      message: message,
    };
    const url = import.meta.env.VITE_API_URL;
    try {
      const response = await axios.post(url + "contact-us/", payload);
      if (response.status == 200) {
        window.alert("Thank you for reaching out to us.");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      window.alert("An error occurred, could not submit the data, try again later.");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section
      id="contact-us"
      className="contact-us-container"
      onClick={() => setMenuOpen(false)}
    >
      <div className="contact-us-header">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-us-brief-message">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          aliquid totam odit eos minima repellat quae quos? Architecto debitis
          neque laboriosam, incidunt mollitia quaerat qui tenetur nobis a, iusto
          porro, libero veniam id expedita consectetur ex saepe possimus quo
          facilis adipisci beatae facere obcaecati quia vitae! Sunt enim natus
          ea!
        </p>
      </div>
      <div className="contact-is-form">
        <form onSubmit={handleSumbit}>
          <label htmlFor="name">Name: </label>
          <br />
          <input
            type="text"
            id="name"
            aria-label="enter your name"
            value={name}
            minLength={2}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <br />
          <input
            type="email"
            id="email"
            aria-label="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            name="message"
            id="message"
            value={message}
            cols={30}
            rows={5}
            placeholder="message..."
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

// "The quieter you become, the more you can hear."
