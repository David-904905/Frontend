import { useEffect, useState, useContext } from "react";
import "../../styles/navbar.css";
import { NavBarContext } from "../../contexts/NavContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { clickedLink, setClickedLink } = useContext(NavBarContext);

    const handleLinkClick = (link) => {
        // Set the clicked link and toggle menu visibility
        setClickedLink(link);
        setMenuOpen(false); // Automatically close the menu after selection
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <nav className="nav-bar">
            <div className="nav-header">
                <img src="/logo-header2.svg" height={60} width={100} alt="header logo" />
            </div>

            <div className="hamburger-icon" onClick={toggleMenu}>
                <GiHamburgerMenu size={30} />
            </div>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <div className="close-icon" onClick={toggleMenu}>
                    <AiOutlineClose size={30} />
                </div>

                <ul>
                    <li>
                        <a
                            onClick={() => handleLinkClick("home")}
                            className={`regular ${clickedLink === "home" ? "clicked" : ""}`}
                            href="#home"
                        >
                            HOME
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => handleLinkClick("gallery")}
                            className={`regular ${clickedLink === "gallery" ? "clicked" : ""}`}
                            href="#gallery"
                        >
                            GALLERY
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => handleLinkClick("projects")}
                            className={`regular ${clickedLink === "projects" ? "clicked" : ""}`}
                            href="#projects"
                        >
                            PROJECTS
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => handleLinkClick("certifications")}
                            className={`regular ${clickedLink === "certifications" ? "clicked" : ""}`}
                            href="#certifications"
                        >
                            CERTIFICATIONS
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => handleLinkClick("contacts")}
                            className={`regular ${clickedLink === "contacts" ? "clicked" : ""}`}
                            href="#contacts"
                        >
                            CONTACTS
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
