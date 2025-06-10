// styling
import "../../styles/toast.css";

// types
import type { ToastPayload } from "../interfaces/interface";

// icons
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

// make the color of the icon customizable.

// contexts
import useToastContext from "../hooks/useToastContext";

const Toast = ({ status, message, duration }: ToastPayload) => {
  const { showToast, setShowToast } = useToastContext();

  const handleCancelToast = () => {
    setShowToast(!showToast);
  };

  return (
    <div className="toast-main-container">
      <div className="wrapper">
        <div className="icon-status">
          <div className="icon-status-inner">
            <FaCheckCircle className="success-color" />
            {status}
          </div>
          <button className="icon-status-cancel" onClick={handleCancelToast}>
            <MdCancel style={{ fill: "red" }} />
          </button>
        </div>
        <div className="message">{message}</div>
      </div>
      <div
        className="loading-stuff"
        style={{ animationDuration: `${duration}s` }}
      ></div>
    </div>
  );
};

export default Toast;
