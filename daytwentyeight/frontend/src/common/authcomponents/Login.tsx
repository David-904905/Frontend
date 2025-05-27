// react
import { useState } from "react";

// styling
import "@css/authentication.css";

//components
import HomeNav from "@common/home/HomeNav";
import OtherAuth from "./OtherAuth";

// icons
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <>
      <HomeNav />
      <div className="login-container">
        <div className="login-body-container">
          <div className="login-body">
            <div className="login-message">
              <h2>Login</h2>
              <p>
                Use one of your existing accounts or emails to log in to Ufune
                Newd (it's free!)
              </p>
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
                <div className="password">
                  <label htmlFor="password">Password: </label>
                  <br />
                  <div className="inner-password">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
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
      </div>
    </>
  );
};

export default Login;
