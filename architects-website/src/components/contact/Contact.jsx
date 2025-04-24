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
                    <div className="contact-message-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quia blanditiis maxime incidunt dignissimos neque necessitatibus quos cupiditate assumenda corrupti?
                    </div>
                    <div className="contact-message-p-large">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, aspernatur saepe! Explicabo, totam eligendi accusantium iste, soluta officiis perspiciatis nam perferendis iure id vel unde quod consectetur mollitia enim. At, natus non! Cumque amet consequuntur animi provident reprehenderit nihil! Quisquam aspernatur enim ipsum asperiores ullam nihil, placeat unde voluptatibus odio nisi, fugiat facere dignissimos minima labore officiis architecto repellendus maxime incidunt. Saepe minima natus excepturi repellendus assumenda consequatur libero soluta.
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
                        {/* <div className="contact-image">
                            
                        </div> */}
                        {/* <div className="map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8096497.553604906!2d0.10379402635927525!3d7.750741604685484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0be7f76d176f%3A0x9e788c92d18d1ad6!2sWalex%20Biz%20Nigeria!5e0!3m2!1sen!2sng!4v1745485730055!5m2!1sen!2sng" width="600" height="450" style={{ "border": 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div> */}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact;
