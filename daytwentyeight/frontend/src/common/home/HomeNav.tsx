import "@css/home.css";

// react router
import { NavLink } from "react-router-dom";

// context

import { AuthContext } from "@contexts/AuthContext";
import { useContext, useEffect } from "react";

const HomeNav = () => {
  const context = useContext(AuthContext);
  if (!context) {
    return;
  }

  const { loginStatus, _isHome, setIsHome } = context;

  useEffect(() => {
    setIsHome(true);
  }, [])
  return (
    <nav className="home-nav-bar">
      <div className="logo-x-name">
        <h2>Ufune Nwed</h2>
      </div>
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
    </nav>
  );
};

export default HomeNav;
