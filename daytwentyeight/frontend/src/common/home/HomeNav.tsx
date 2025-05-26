import "@css/home.css";

// react router
import { NavLink } from "react-router-dom";

// context

import { AuthContext } from "@contexts/AuthContext";
import { useContext, useState } from "react";

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const HomeNav = () => {
  const context = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  if (!context) {
    return;
  }

  const { loginStatus } = context;

  return (
    <nav className="home-nav-bar">
      <div className="logo-x-name">
        <NavLink to={"/"}>
          <h2>Ufune Nwed</h2>
        </NavLink>
      </div>
      <div className="burger">
        <GiHamburgerMenu />
      </div>
      <div className="nav-link-wrapper">
        <div className="nav-links-middle">
          <ul>
            <li>
              <NavLink to={"/"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Contact Us</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Contribute</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-links-end">
          <div className="close-nav-btn">
            <IoClose />
          </div>
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
