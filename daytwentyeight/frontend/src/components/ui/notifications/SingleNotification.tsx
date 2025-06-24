import { IoMdNotificationsOutline } from "react-icons/io";

import type { Notification } from "@interfaces/Interface";

const SingleNotification = ({title, description, time}: Notification) => {    
  return (
    <>
        <div className="single-notification">
            <div className="notification-icon">
                <IoMdNotificationsOutline />
            </div>
            <div className="title-and-description">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="time">
                <p>{time.toDateString()}</p>
            </div>
        </div>
    </>
  )
}

export default SingleNotification