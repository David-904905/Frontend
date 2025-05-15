import "../../../css/profile.css";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserDetails";

// components
import DisplayData from "./DisplayData";
import Product from "../../tests_components/Product";

// icons
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const context = useContext(UserContext);
  if (!context) {
    return;
  }
  const { name, setName, bio, setBio } = context;

  const [coverImage, setCoverImage] = useState<string>(
    "https://placehold.co/1500x400"
  );
  const [profileImage, setProfileImage] = useState<string>(
    "https://placehold.co/100"
  );

  const handleCoverImage = (e: any) => {
    
  };
  const handleProfileImage = (e: any) => {

  };

  return (
    <div className="profile-dashboard">
      <div className="profile-container">
        <img src={coverImage} alt="cover-image" className="cover-image" />
        <label htmlFor="cover-img-upload-btn" className="camera-icon-container">
          <div className="sub-container">
            <FaCamera className="camera-icon" />
          </div>
        </label>
        <input
          type="file"
          id="cover-img-upload-btn"
          className="upload-cover-img"
          hidden={true}
          accept="image/*"
          onChange={handleCoverImage}
        />
      </div>
      <div className="profile-image-container">
        <div className="profile-img-and-update-icon">
          <img
            src={profileImage}
            alt="profile-image"
            className="profile-image"
          />
          <label
            htmlFor="profile-img-upload-btn"
            className=""
          >
            <div className="sub-container">
              <FaCamera className="camera-icon" />
            </div>
          </label>
          <input
            type="file"
            id="profile-img-upload-btn"
            className="upload-cover-img"
            hidden={true}
            accept="image/*"
            onChange={handleProfileImage}
          />
        </div>
        <div className="bio-section">
          <div className="information-section">
            <h2>Name: {name}</h2>
          </div>
          <div className="about-me">
            <h2>
              Bio:{" "}
              <span style={{ fontWeight: "100", fontSize: "20px" }}>{bio}</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="other-section">
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
