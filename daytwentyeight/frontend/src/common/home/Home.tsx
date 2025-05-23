import "@css/home.css";

import HomeNav from "./HomeNav";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-main-container">
        <HomeNav />
        <div className="home-message">
          <h2 className="home-text-header">Welcome to ufune nwed</h2>
          <p className="home-text-first">A place to relax, read and engage with like minds</p>
          <span className="learn-more-link"><NavLink to={"/about-us"}>Learn more?</NavLink></span>
        </div>
      </div>
    </>
  )
}

export default Home