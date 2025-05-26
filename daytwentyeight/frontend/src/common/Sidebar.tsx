import "../css/sidebar.css";

// react-icons
import { FaTachometerAlt } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { CiSaveDown2 } from "react-icons/ci";
import { BiSolidNotepad } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp, IoShareOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="top-options">
        <div className="welcome-section">
            <NavLink to={'/user/dashboard'} style={{"color": "white"}}><FaTachometerAlt className="home-icon" /></NavLink>
        </div>
        <div className="ruler-stuff"></div>
        <div className="links-section">
            <ul className="top-utilities-link">
                <li className="top-links-item"><NavLink to={'/'}><FaBookOpen /></NavLink><p>Books</p></li>
                <li className="top-links-item"><NavLink to={'/'}><CiSaveDown2 /></NavLink><p>Downloads</p></li>
                <li className="top-links-item"><NavLink to={'/'}><BiSolidNotepad /></NavLink><p>Notes</p></li>
                <li className="top-links-item"><NavLink to={'/'}><FaTasks /></NavLink><p>Tasks</p></li>
                <li className="top-links-item"><NavLink to={'/'}><IoMdNotifications /></NavLink><p>Notifications</p></li>
                <li className="top-links-item"><NavLink to={'/'}><IoShareOutline /></NavLink><p>Share</p></li>
            </ul>
        </div>
      </div>
      <div className="links-section">
            <ul className="top-utilities-link">
                <li className="top-links-item"><NavLink to={'/user/profile'}><FaUserAlt /></NavLink><p>Profile</p></li>
                <li className="top-links-item"><NavLink to={'/'}><IoSettingsSharp /></NavLink><p>Settings</p></li>
            </ul>
        </div>
    </aside>
  );
};

export default Sidebar;
