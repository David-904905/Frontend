import "../stylesheets/profile.css";
import { useContext, useRef } from "react";
import { UserContext } from "../contexts/UserDetails";

// components
import DisplayData from "./DisplayData";
import Product from "./Product";

// icons
import { FaCamera } from "react-icons/fa";

const Profile = () => {


  const context = useContext(UserContext)
  if (!context)
  {
    return
  }
  const {name, setName, bio, setBio, setCoverImage, setProfileImage } = context
  const coverImage = useRef<HTMLDivElement | null>(null);
  const profileImage = useRef<HTMLDivElement | null>(null);

  const handleCoverImage = (image: string) => {}
  const handleProfileImage = (image: string) => 
  {

  }

  return (
    <div className="profile-dashboard">
      <div className="profile-container">
        <div className="profile-cover-img" ref={coverImage}>
          <div className="profile-img" ref={profileImage}>
            <div className="edit-button">
              <input type="file" id="profile-upload" style={{
                "display": "none"
              }} onChange={(e) => handleProfileImage(e.target.files[0])} />
              <label htmlFor="profile-upload">
                <FaCamera className="edit-btn-main"/>
              </label>
            </div>
          </div>
          <div className="edit-button-cover">
              <input type="file" id="profile-upload" style={{
                "display": "none"
              }} />
              <label htmlFor="profile-upload">
                <FaCamera className="edit-btn-main"/>
              </label>
            </div>
        </div>
      </div>
      <div className="other-section">
        <div className="info">
          <h2>Name: {name}</h2>
        </div>
        <div className="about-me">
          <h2>
            Bio:{" "}
            <span style={{ fontWeight: "100", fontSize: "20px" }}>
              {bio}
            </span>
          </h2>
        </div>
        <div className="skills-and-other-info">
          <div className="card-slips-tab-stuff">
            <h2>Skills</h2>
            <Product />
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div className="card-slips-tab-stuff">
            <h2>Stats</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        </div>
        <div className="skills-and-other-info">
          <div className="card-slips-tab-stuff">
            <h2>Top Books</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div className="card-slips-tab-stuff">
            <h2>Completed</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <DisplayData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
