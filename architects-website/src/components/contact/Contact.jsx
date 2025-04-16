import { useState } from "react";

import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [interests, setInterests] = useState('');
    const [message, setMessage] = useState('');

    const verifyNumber = () => {
        const numberRegex = /[]/
    }

    const verifyEmail = () => {
        const emailRegex = /[]/
    }

    
    return (
        <>
            <section className="contact-us">
                <div className="contact-header">
                    <h2>Contact Us</h2>
                </div>
                <div className="contact-form-section">
                    <div className="form-container">
                        <form action="">
                            <input type="text" required placeholder="Name" /><br />
                            <input type="text" required placeholder="Phone Number*" /><br />
                            <input type="email" required placeholder="Email*" />
                            <input type="text" required placeholder="Interested In" />
                            <input type="text" required placeholder="Message*" />
                        </form>
                    </div>
                    <div className="contact-image">
                        <img src="/public/contact-us.png" alt="" />
                    </div>
                </div>
                <button>
                    SEND EMAIL <FaArrowRightLong />
                </button>
            </section>
        </>
    )
}

export default Contact;
