import { useState } from 'react'

// icons
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const PendingTasks = () => {
    const [pendingTasks, _setPendingTasks] = useState(true);
  return (
    <>
        <div className="pending-tasks">
            <div className="pending-info">
                <h2>Tasks</h2>
                <p>{pendingTasks ? "You have some pending tasks" : "No pending tasks"}</p>
            </div>
            <div className="follow-me">
                <NavLink to={'/'} style={{
                    color: "black",
                    fontSize: "25px"
                }} >
                    <IoIosArrowForward />
                </NavLink>
            </div>
        </div>
    </>
  )
}

export default PendingTasks