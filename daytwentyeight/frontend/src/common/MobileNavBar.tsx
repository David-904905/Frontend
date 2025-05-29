import "@css/mobilenav.css";
import { useState } from "react";
import { BiSolidNotepad } from "react-icons/bi";
import { CiSaveDown2 } from "react-icons/ci";
import {
  FaBookOpen,
  FaTachometerAlt,
  FaTasks,
  FaUserAlt,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import { IoShareOutline, IoSettingsSharp, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const MobileNavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav className="main-mobile-nav-container">
      <div className="logo-x-name-mobile">
        <NavLink to={"/"}>
          <h2>Ufune Nwed</h2>
        </NavLink>
      </div>
      <div
        className={menuOpen ? "hideme" : "burger"}
        onClick={() => setMenuOpen(true)}
      >
        <GiHamburgerMenu />
      </div>
      <div className={`nav-link-wrapper-mobile ${menuOpen ? "open" : ""}`}>
        <div className="close-nav-btn" onClick={() => setMenuOpen(false)}>
          <IoClose />
        </div>
        <div className="top-options">
          <div className="welcome-section">
            <NavLink to={"/user/dashboard"} style={{ color: "white" }}>
              <FaTachometerAlt className="home-icon" />
            </NavLink>
          </div>
          <div className="ruler-stuff"></div>
          <div className="links-section">
            <ul className="top-utilities-link">
              <li className="top-links-item">
                <NavLink to={"/"}>
                  <FaBookOpen />
                </NavLink>
                <p>Books</p>
              </li>
              <li className="top-links-item">
                <NavLink to={"/"}>
                  <CiSaveDown2 />
                </NavLink>
                <p>Downloads</p>
              </li>
              <li className="top-links-item">
                <NavLink to={"/"}>
                  <BiSolidNotepad />
                </NavLink>
                <p>Notes</p>
              </li>
              <li className="top-links-item">
                <NavLink to={"/"}>
                  <FaTasks />
                </NavLink>
                <p>Tasks</p>
              </li>
              <li className="top-links-item">
                <NavLink to={"/"}>
                  <IoMdNotifications />
                </NavLink>
                <p>Notifications</p>
              </li>
              <li className="top-links-item">
                <NavLink to={"/"}>
                  <IoShareOutline />
                </NavLink>
                <p>Share</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="links-section">
          <ul className="top-utilities-link">
            <li className="top-links-item">
              <NavLink to={"/user/profile"}>
                <FaUserAlt />
              </NavLink>
              <p>Profile</p>
            </li>
            <li className="top-links-item">
              <NavLink to={"/"}>
                <IoSettingsSharp />
              </NavLink>
              <p>Settings</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
