import { useState } from "react";
import { useForm } from "react-hook-form";

import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('');
    // const [email, setEmail] = useState('');
    // const [interests, setInterests] = useState('');
    // const [message, setMessage] = useState('');

    // const verifyNumber = () => {
    //     const numberRegex = /[]/
    // }

    // const verifyEmail = () => {
    //     const emailRegex = /[]/
    // }

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = (data) => console.log(data);


    return (
        <>
            <section className="contact-us">
                <div className="contact-header">
                    <h2>Contact Us</h2>
                </div>
                <div className="contact-form-section">
                    <div className="form-container">
                        <form action="">
                            <div className="name-input">
                                <input type="text" {
                                    ...register(
                                        "name",
                                        {
                                            required: "This field is required.",
                                            pattern: {
                                                value: /^[A-Za-z]+([0-9])?$/i,
                                                message: "Enter a valid name"
                                            }
                                        })}
                                    placeholder="Name" /><br />
                                {errors.name && <p style={{ "color": "red" }}>{errors.name.message}</p>}
                            </div>
                            <div className="phone-input">
                                <input type="text" {
                                    ...register(
                                        "phone",
                                        {
                                            required: "This field is required",
                                            pattern: {
                                                value: /(\+234|0)(80|81|90|91|70|71)\d{10}/,
                                                message: "Enter a valid phone number"
                                            }
                                        }
                                    )
                                } placeholder="Phone Number*" /><br />
                                {errors.phone && <p style={{ "color": "red" }}>{errors.phone.message}</p>}
                            </div>
                            <div className="email-input">
                                <input type="email" {
                                    ...register("email",
                                        {
                                            required: "This field is required",
                                            pattern: {
                                                value: /a/,
                                                message: "Enter a valid phone number"
                                            }
                                        }
                                    )
                                } placeholder="Email*" />
                            </div>
                            <input type="text" required placeholder="Interested In" />
                            <input type="text" required placeholder="Message*" />
                        </form>
                    </div>
                    <div className="contact-image">
                        <img src="/public/contactus2.png" alt="" />
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
