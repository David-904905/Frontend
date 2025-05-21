// styling
import "@css/gchat.css";

// react icons
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoSend } from "react-icons/io5";
import { IoShareOutline } from "react-icons/io5";
// import { FaCamera } from "react-icons/fa";

const Chat = () => {
  return (
    <>
      <div className="chat-main-container">
        <div className="chat-bar">
          <div className="chat-group-image">
            <img
              src="https://placehold.co/50"
              alt="group-icon"
              className="chat-group-icon"
            />
          </div>
          <div className="group-name-active">
            <h4>Group X</h4>
            <p>10 online</p>
          </div>
          <div className="drawerstuff">
            <HiOutlineDotsVertical />
          </div>
        </div>
        <div className="group-chat-messages"></div>
        <div className="user-chat-input">
          <div className="left-hand-side">
            <div className="upload-icons">
              <label htmlFor="group-file-upload">
                <IoShareOutline aria-label="upload-message" />
              </label>
              <input
                type="file"
                id="group-file-upload"
                name="group-file-upload"
                hidden={true}
              />
            </div>
            <div className="text-input">
              <textarea
                aria-label="enter message"
                className="message-input"
                rows={1}
              ></textarea>
            </div>
          </div>
          <div className="send-message-btn" aria-label="send message">
            <IoSend
              aria-label="send message"
              style={{
                fill: "white",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
