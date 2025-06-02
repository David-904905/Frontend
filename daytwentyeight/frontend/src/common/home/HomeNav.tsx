import "@css/home.css";

// react router
import { NavLink } from "react-router-dom";

// context

import { AuthContext } from "@contexts/AuthContext";
import { useContext } from "react";

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
// import { MenuOpenContext } from "@contexts/NavBarContext";
import { useMenuOpen } from "@hooks/useMenuOpen";

const HomeNav = () => {
  const context = useContext(AuthContext);
  if (!context) {
    return;
  }
  const {menuOpen, setMenuOpen} = useMenuOpen();
  const { loginStatus } = context;

  return (
    <nav className="home-nav-bar">
      <div className="logo-x-name">
        <NavLink to={"/"}>
          <h2>Ufune Nwed</h2>
        </NavLink>
      </div>
      <div className={menuOpen ? "hideme" : "burger"} onClick={() => setMenuOpen(true)}>
        <GiHamburgerMenu />
      </div>
      <div className={`nav-link-wrapper ${menuOpen ? "open" : ""}`}>
        <div className="close-nav-btn" onClick={() => setMenuOpen(false)}>
          <IoClose />
        </div>
        <div className="nav-links-middle">
          <ul>
            <li>
              <a href="/#about-us" onClick={() => setMenuOpen(false)}>About</a>
              
            </li>
            <li>
              <a href='/#mission-statement' onClick={() => setMenuOpen(false)}>Mission</a>
            </li>
            <li>
              <a href='/#contribute' onClick={() => setMenuOpen(false)}>Contact Us</a>
            </li>
            <li>
              <a href='/#contact-us' onClick={() => setMenuOpen(false)}>Contribute</a>
            </li>
          </ul>
        </div>
        <div className="nav-links-end">
          <ul>
            <li>
              <div className="login-dashboard">
                {loginStatus ? (
                  <NavLink to={"/user/dashboard"}>DashBoard</NavLink>
                ) : (
                  <NavLink to={"/auth/login"}>Login</NavLink>
                )}
              </div>
            </li>
            <li>
              <div className="signup-logout">
                {loginStatus ? (
                  <NavLink to={"/logout"}>Logout</NavLink>
                ) : (
                  <NavLink to={"/auth/sign-up"}>Signup</NavLink>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
