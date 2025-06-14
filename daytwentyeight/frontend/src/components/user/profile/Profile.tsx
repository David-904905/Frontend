import "@css/profile.css";
import { useContext, useEffect, useState } from "react";
// components

// icons
import { FaCamera } from "react-icons/fa";
import { AuthContext } from "@contexts/AuthContext";
import { useUserDetails } from "@hooks/useUserDetails";
import useAuth from "@hooks/useAuth";
import { useMenuOpen } from "@hooks/useMenuOpen";

const Profile = () => {
  const context = useUserDetails();
  const { name, setName, bio, setBio } = context;

  const [coverImage, setCoverImage] = useState<string>(
    "https://placehold.co/1500x400"
  );
  const [profileImage, setProfileImage] = useState<string>(
    "https://placehold.co/100"
  );

  const handleCoverImage = (e: any) => {};
  const handleProfileImage = (e: any) => {};

  const { setIsHome } = useAuth();
  const { setMenuOpen } = useMenuOpen();
  useEffect(() => {
    setIsHome(false);
  }, []);

  return (
    <div className="profile-dashboard" onClick={() => setMenuOpen(false)}>
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
          <label htmlFor="profile-img-upload-btn" className="">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
