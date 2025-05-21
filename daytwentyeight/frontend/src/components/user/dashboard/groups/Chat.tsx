
// styling
import "@css/gchat.css";

// react icons
import { HiOutlineDotsVertical } from "react-icons/hi";

const Chat = () => {
  return (
    <>
        <div className="chat-main-container">
            <div className="chat-bar">
                <div className="chat-group-image">
                    <img src="https://placehold.co/50" alt="group-icon" className="chat-group-icon" />
                </div>
                <div className="group-name-active">
                    <h4>Group X</h4>
                    <p>10 online</p>
                </div>
                <div className="drawerstuff">
                    <HiOutlineDotsVertical />
                </div>
            </div>
        </div>
    </>
  )
}

export default Chat