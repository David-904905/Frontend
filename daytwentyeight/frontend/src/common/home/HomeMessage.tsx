import "@css/home.css";
import { NavLink } from "react-router-dom";


const HomeMessage = () => {
  return (
    <div className="home-main-container">
      <div className="home-message">
        <h2 className="home-text-header">Welcome to ufune nwed</h2>
        <p className="home-text-first">
          A place to relax, read and engage with like minds
        </p>
        <span className="learn-more-link">
          <NavLink to={"/about-us"}>Learn more?</NavLink>
        </span>
      </div>
    </div>
  );
};

export default HomeMessage;
