import { useSettings } from "@hooks/useSettings";
import SingleNotification from "./SingleNotification";
import { IoMdCloseCircle } from "react-icons/io";




const date = new Date();

const Notifications = () => {
  const { setShowNotificationModal } = useSettings();

  return (
    <div
      className="fixed inset-0 z-40 flex items-start justify-end bg-[rgba(0,0,0,0.1)]"
      onClick={() => setShowNotificationModal(false)}
    >
      <div
        className="relative !mt-[30px] !mx-[30px] lg:w-[400px] h-[400px] w-[250px]   bg-[var(--bg-color)] text-[var(--text-color)] rounded-xl shadow-lg border-1 border-neutral-900 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center !px-4 !py-2 border-b-2 border-[var(--text-color)]">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <button onClick={() => setShowNotificationModal(false)}>
            <IoMdCloseCircle className="text-red-700 text-xl" />
          </button>
        </div>

        {/* Scrollable Notifications Area */}
        <div className="flex-1 overflow-auto !p-4 space-y-3 scroll-hide">
          <SingleNotification
            title="Message"
            description="New message from peter"
            time={date}
          />
          <SingleNotification
            title="Message"
            description="New message from peter"
            time={date}
          />
          <SingleNotification
            title="Message"
            description="New message from peter"
            time={date}
          />
          <SingleNotification
            title="Message"
            description="New message from peter"
            time={date}
          />
          <SingleNotification
            title="Message"
            description="New message from peter"
            time={date}
          />
          {/* Add more notifications as needed */}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
