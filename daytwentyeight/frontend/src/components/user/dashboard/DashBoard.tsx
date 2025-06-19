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
import { useUserDetails } from "@hooks/useUserDetails";

const DashBoard = () => {
  const {setIsHome} = useAuth();
  useEffect(() => {
    setIsHome(false);
  }, [])

  const {setMenuOpen} = useMenuOpen();
  const { name } = useUserDetails();
  return (
    <div className="ml-[200px] flex flex-col justify-between h-screen text-[var(--text-color)]" onClick={() => setMenuOpen(false)}>
      <div className="dashboard-sub-container flex gap-5 text-neutral-700 font-bold text-[15px]">
        <div className="image-container">
          <div className="user-image ">
            <img
              className="rounded-full"
              src="https://placehold.co/90"
              alt=""
            />
          </div>
        </div>
        <div className="other-text">
          <h2>Welcome {name}</h2>
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
