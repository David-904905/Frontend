import "@css/dashboard.css";

import { useState } from "react";
import type { DailyQuote } from "@interfaces/Interface";
import useFetchDailyQuote from "@hooks/useFetchDailyQuote";

// import { IoMdNotifications } from "react-icons/io";

// components
import Quote from "./Quote";

const DashBoard = () => {
  const [groupImg, _setGroupImg] = useState("https://placehold.co/50");

  return (
    <div className="dashboard-container">
      <div className="dashboard-sub-container">
        <div className="greet-user">Welcome Ukpong Nsikak</div>
        <div className="other-text">
          Here's the latest updates, wishing you a wonderful study session
        </div>
      </div>
      <div className="welcome-text">welcome to book land or something</div>
      <div className="study-quote">
        <Quote />
      </div>
      <div className="groups">
        <div className="group-header-and-description">
          <h2>Groups</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            cupiditate provident similique minima earum iure harum id sunt modi
            omnis.
          </p>
        </div>
        <div className="groups-tile">
          <div className="group-pill">
            <div className="group-icon">
              <img src={groupImg} alt="group-image" />
            </div>
            <div className="name-description">
              <h2>Group X</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, eveniet?
              </p>
            </div>
            <div className="members">
              <div className="notification-count-div">
                <p>1</p>
              </div>
            </div>
          </div>
          <div className="group-pill">
            <div className="group-icon">
              <img src={groupImg} alt="group-image" />
            </div>
            <div className="name-description">
              <h2>Group X</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, eveniet?
              </p>
            </div>
            <div className="members">
              <div className="notification-count-div">
                <p>1</p>
              </div>
            </div>
          </div>
          <div className="group-pill">
            <div className="group-icon">
              <img src={groupImg} alt="group-image" />
            </div>
            <div className="name-description">
              <h2>Group X</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, eveniet?
              </p>
            </div>
            <div className="members">
              <div className="notification-count-div">
                <p>1</p>
              </div>
            </div>
          </div>
          <div className="group-pill">
            <div className="group-icon">
              <img src={groupImg} alt="group-image" />
            </div>
            <div className="name-description">
              <h2>Group X</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, eveniet?
              </p>
            </div>
            <div className="members">
              <div className="notification-count-div">
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-rooms"></div>
    </div>
  );
};

export default DashBoard;
