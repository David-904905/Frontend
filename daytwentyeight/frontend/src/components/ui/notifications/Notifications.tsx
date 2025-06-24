import { useSettings } from "@hooks/useSettings";
import SingleNotification from "./SingleNotification";

const date = new Date();

const Notifications = () => {
  const { setShowNotificationModal } = useSettings();

  return (
    <div
      className="fixed inset-0 z-40 flex bg-[rgba(0,0,0,0.1)] bg-opacity-15"
      onClick={() => setShowNotificationModal(false)}
    >
      <div
        className="relative h-[300px] w-[300px] p-6 mt-[400px] bg-[var(--bg-color)] z-50 text-[var(--text-color)] rounded shadow-lg border-2 border-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="notification-header mb-4">
          <h2 className="text-lg font-semibold p-5 rounded">Notifications</h2>
        </div>
        <div className="notifications-container space-y-2">
          <SingleNotification
            title="Message"
            description="You have a new message from Peter"
            time={date}
          />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
