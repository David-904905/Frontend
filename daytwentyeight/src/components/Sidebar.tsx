import "../stylesheets/sidebar.css";

// react-icons
import { FaTachometerAlt } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { CiSaveDown2 } from "react-icons/ci";
import { BiSolidNotepad } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="top-options">
        <div className="welcome-section">
            <FaTachometerAlt className="home-icon" />
        </div>
        
        
        <div className="ruler-stuff"></div>
        <div className="links-section">
            <ul className="top-utilities-link">
                <li className="top-links-item"><a href=""><FaBookOpen /></a><p>Books</p></li>
                <li className="top-links-item"><a href=""><CiSaveDown2 /></a><p>Downloads</p></li>
                <li className="top-links-item"><a href=""><BiSolidNotepad /></a><p>Notes</p></li>
                <li className="top-links-item"><a href=""><FaTasks /></a><p>Tasks</p></li>
            </ul>
        </div>
      </div>
      <div className="links-section">
            <ul className="top-utilities-link">
                <li className="top-links-item"><a href=""><FaUserAlt /></a><p>Profile</p></li>
                <li className="top-links-item"><a href=""><IoSettingsSharp /></a><p>Settings</p></li>
            </ul>
        </div>
    </aside>
  );
};

export default Sidebar;
