import "@css/dashboard.css";

// import { IoMdNotifications } from "react-icons/io";
import { GiCampfire } from "react-icons/gi";

// components
import Quote from "./Quote";
import Calendar from "react-calendar";
import Groups from "./groups/Groups";
import PendingTasks from "./PendingTasks";
import { useEffect } from "react";

import useAuth from "@hooks/useAuth";
import { useMenuOpen } from "@hooks/useMenuOpen";

const DashBoard = () => {
  const {setIsHome} = useAuth();
  useEffect(() => {
    setIsHome(false);
  }, [])

  const {setMenuOpen} = useMenuOpen();
  return (
    <div className="dashboard-container" onClick={() => setMenuOpen(false)}>
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
        <div className="quote-and-tasks">
          <div className="study-quote">
            <h2>Daily Quote</h2>
            <Quote />
          </div>
          <div className="pending-container">
            <PendingTasks />
          </div>
        </div>
        <div className="other-tile">
          <div className="calendar-casing">
            <h3>
              Streak <GiCampfire className="steak-icon" />
            </h3>
            <Calendar className="calendar" />
          </div>
        </div>
      </div>
      <Groups />
      <div className="spacing"></div>
    </div>
  );
};

export default DashBoard;
