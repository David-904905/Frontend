import { useContext } from "react";
import { FormContext } from "../../../contexts/FormDataProvider";



import "./ticket.css";

const Ticket = () => {

    const context = useContext(FormContext);
    if(!context)
    {
        return "";
    }
    const {
        firstname,
        lastname,
        email,
        phone,
        date,
      } = context;

    const generateTicketID = (): string => {
        const userDate = new Date(date);
        const currentDate = new Date();

        const arr: (string | number)[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        return ""

    }
  return (
    <>
      <section className="ticket-section">
        <div className="ticket-head-msg">
          <div className="ticket-header">
            <h2>Ticket</h2>
          </div>
          <div className="message">
            <p>
              Congratulations user, your ticket has been generated, and a copy
              has been sent to your email.
            </p>
          </div>
        </div>
        <div className="ticket-container">
          <div className="ticket-card">
            <div className="main-message">
              <p>Ticket ID</p>
              <p>Name: {lastname} {firstname}</p>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <p>Date: {date}</p>
            </div>
            <div className="other-msg">
              <p>
                Find out more? <a href="">click here</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ticket;
