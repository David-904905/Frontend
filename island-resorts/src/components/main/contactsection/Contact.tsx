import { useState } from "react";


//styling
import "./contact.css";

const Contact = () => {

    const [validPhone, setValidPhone] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const numberRegex: RegExp = /^(\+234|0)(70|80|81|90|91|92|93|94|95|96|97|98|99)[0-9]{6}$/
        if(phone.match(numberRegex))
        {
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            window.alert("Your form has been submited sucessfully");
        }
        else
        {
            setValidPhone(false);
        }
    }
  return (
    <>
      <section className="contact-us">
        <div className="contact-header">
            <h2>Contact Us</h2>
        </div>
        <div className="form-and-message">
            <div className="message">
                Want to share something with us? feel free to contact. We improve our services through your ideas and recommendations.
            </div>
          <div className="contact-form">
            <form className="form-section" onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label><br />
                <input type="text" id="name" minLength={2} maxLength={50} required value={name} onChange={(e) => setName(e.target.value)}/> <br />
                <label htmlFor="email">Email</label><br />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/><br />
                <label htmlFor="phoneno">Phone No.</label><br />
                <input type="text" minLength={10} maxLength={11} value={phone} onChange={(e) => setPhone(e.target.value)}/><br />
                { validPhone ? "" : <p style={{
                    fontSize: "12px",
                    color: "red",
                }}>The phone number you entered is invalid</p>}
                <label htmlFor="message">Message</label><br />
                <textarea
                     name="message" 
                     id="message" 
                     cols={30} 
                     rows={10} 
                     placeholder="message" 
                     required value={message} 
                     onChange={(e) => setMessage(e.target.value)}
                     ></textarea><br />
                <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
