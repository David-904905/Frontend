import "@css/dashboard.css";

import { useState } from "react";

// import { IoMdNotifications } from "react-icons/io";
import { GiCampfire } from "react-icons/gi";

// components
import Quote from "./Quote";
import Calendar from "react-calendar";
import Chat from "./groups/Chat";

const DashBoard = () => {
  const [groupImg, _setGroupImg] = useState("https://placehold.co/50");

  return (
    <div className="dashboard-container">
      <div className="dashboard-sub-container">
        <div className="greet-user">
          <div className="user-image">
            <img
              className="welcome-img-greet"
              src="https://placehold.co/90"
              alt=""
            />
          </div>
        </div>
        <div className="other-text">
          <h2>Welcome Ukpong Nsikak</h2>
          <p>
            Here's the latest updates, wishing you a wonderful study session
          </p>
        </div>
      </div>
      <div className="quote-and-stats">
        <div className="study-quote">
          <h2>Daily Quote</h2>
          <Quote />
        </div>
        {/* <div className="streaks">
            
        </div> */}
        <div className="other-tile">
          <div className="calendar-casing">
            <h3>
              Streak <GiCampfire className="steak-icon" />
            </h3>
            <Calendar className="calendar" />
          </div>
        </div>
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
        <div className="groups-and-group-chat">
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
          <Chat />
        </div>
      </div>
      <div className="spacing"></div>
    </div>
  );
};

export default DashBoard;
