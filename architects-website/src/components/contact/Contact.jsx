import { useState } from "react";
import { useForm } from "react-hook-form";

import { FaArrowRightLong } from "react-icons/fa6";

import "../../styles/contact.css"

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
                <div className="contact-contain">
                    <div className="contact-header">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="contact-form-section">
                        <div className="form-container">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="name-input">
                                    <input type="text" {
                                        ...register(
                                            "name",
                                            {
                                                required: "The name field is required.",
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
                                                required: "The phone field is required",
                                                pattern: {
                                                    value: /^(\+234|0)(80|81|90|91|70|71)[0-9]{10}$/,
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
                                                required: "The email field is required",
                                                pattern: {
                                                    value: /^[A-Za-z]+\d*(\.[A-Za-z]+\d*)?@[A-Za-z]+\d*\.(com|ng)$/i,
                                                    message: "Enter a valid phone number"
                                                }
                                            }
                                        )
                                    } placeholder="Email*" /> <br />
                                    {errors.phone && <p style={{ "color": "red" }}>{errors.phone.message}</p>}
                                </div>
                                <div className="interest-input">
                                    <input type="text" {
                                        ...register(
                                            "interest",
                                            {
                                                required: "The interest field is required",
                                                maxLength: 500,
                                                minLength: 10
                                            }
                                        )
                                    } placeholder="Interested In" /> <br />
                                    {errors.interest && <p style={{ "color": "red" }}>{errors.interest.message}</p>}
                                </div>
                                <div className="message-input">
                                    <textarea type="text" {
                                        ...register(
                                            "message",
                                            {
                                                required: "The message field is required",
                                                maxLength: 500,
                                                minLength: 10
                                            }
                                        )
                                    } placeholder="Message*" ></textarea><br />
                                    {errors.message && <p style={{ "color": "red" }}>{errors.message.message}</p>}
                                </div>
                                <button className="send-email-btn" type="submit">
                                    SEND EMAIL < FaArrowRightLong className="arrow-btn" />
                                </button>
                            </form>
                        </div>
                        <div className="contact-image">
                            {/* <img src="/public/contact-us.png" alt="" /> */}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact;
