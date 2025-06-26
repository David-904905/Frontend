import { IoMdNotificationsOutline } from "react-icons/io";
import type { Notification } from "@interfaces/Interface";

const SingleNotification = ({ title, description }: Notification) => {
  return (
    <div className="single-notification !m-2 flex items-center border !p-3 rounded-lg gap-3">
      
      {/* Icon */}
      <div className="notification-icon !p-2 border-[var(--text-color)] border rounded-xl flex items-center justify-center">
        <IoMdNotificationsOutline className="text-[20px] sm:text-[30px]" />
      </div>

      {/* Title & Description */}
      <div className="title-and-description flex-1 mx-4 overflow-hidden">
        <h2 className="font-semibold truncate">{title}</h2>
        <p className="text-sm truncate">{description}</p>
      </div>

      {/* Time */}
      <div className="time whitespace-nowrap text-xs text-gray-200">
        <p>1 min ago</p>
      </div>
    </div>
  );
};

export default SingleNotification;
