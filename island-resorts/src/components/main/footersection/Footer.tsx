// icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
// styling
import "./footer.css";

const date: Date = new Date();

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="footer-header">
                    <h2>Footer</h2>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Locations</a></li>
                        <li><a href="">Partners</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Reviews</a></li>
                        <li><a href="">More from David Nduonofit</a></li>
                    </ul>
                </div>
                <div className="follow-us">
                    <div className="message"><p>Follow Island Resorts on:</p></div>
                    <div className="social-icons">
                        <a href=""><FaFacebook style={{color: "white"}}/></a>
                        <a href=""><BsTwitterX style={{color: "white"}}/></a>
                        <a href=""><FaInstagramSquare style={{color: "white"}}/></a>
                        <a href=""><FaTiktok style={{color: "white"}}/></a>
                        <a href=""><IoLogoYoutube style={{color: "white"}}/></a>
                        <a href=""><FaLinkedin style={{color: "white"}}/></a>
                    </div>
                </div>
                <div className="copy-rightsection">
                    <p>&copy; David Nduonofit {date.getFullYear()}. All rights reserved</p>
                </div>
            </section>
        </>
    )
}

export default Footer;

