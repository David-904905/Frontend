import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import OtherAuth from "./OtherAuth";

// styling
import "@css/authentication.css";
import HomeNav from "@common/home/HomeNav";

const SignUp = () => {
  const [firstname, setFirstName] = useState<string>("");
  const [surname, setSurName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <HomeNav />
      <div className="signup-parent-container">
        <div className="signin-container">
          <div className="signup-intro">
            <h2>Sign Up</h2>
            <p>Sign up for an Ufune Newd account (it's free!)</p>
          </div>
          <div className="forms-section">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email (personal or work):</label>
              <br />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
              <br />
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <div className="password confirm-password">
                <label htmlFor="confirm-password">Confirm Password: </label>
                <br />
                <div className="inner-password">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    id="confirm-password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button className="login-submit-btn-parent" type="submit">
                    <IoIosArrowForward className="submit-login-btn-icon" />
                  </button>
                  <button
                    type="button"
                    className="show-password-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEye className="show-btn-icon" />
                    ) : (
                      <FaEyeSlash className="show-btn-icon" />
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="divider-and-message">
            <div className="ruler-container"></div>
            <p>or</p>
            <div className="ruler-container"></div>
          </div>
          <div className="login-google-apple">
            <p>continue with: </p>
            <OtherAuth />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
