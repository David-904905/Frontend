import { useState } from "react";

import Chat from "./Chat";

const Groups = () => {
    const [groupImg, _setGroupImg] = useState("https://placehold.co/50");
  return (
    <>
      <div className="groups">
        <div className="group-header-and-description">
          <h2>Groups</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            cupiditate provident similique minima earum iure harum id sunt modi
            omnis.
          </p>
        </div>
        <div className="groups-and-group-chat">
          <div className="groups-tile">
            <div className="group-pill">
              <div className="group-icon">
                <img src={groupImg} alt="group-image" />
              </div>
              <div className="name-description">
                <h2>Group X</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, eveniet?
                </p>
              </div>
              <div className="members">
                <div className="notification-count-div">
                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="group-pill">
              <div className="group-icon">
                <img src={groupImg} alt="group-image" />
              </div>
              <div className="name-description">
                <h2>Group X</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, eveniet?
                </p>
              </div>
              <div className="members">
                <div className="notification-count-div">
                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="group-pill">
              <div className="group-icon">
                <img src={groupImg} alt="group-image" />
              </div>
              <div className="name-description">
                <h2>Group X</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, eveniet?
                </p>
              </div>
              <div className="members">
                <div className="notification-count-div">
                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="group-pill">
              <div className="group-icon">
                <img src={groupImg} alt="group-image" />
              </div>
              <div className="name-description">
                <h2>Group X</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, eveniet?
                </p>
              </div>
              <div className="members">
                <div className="notification-count-div">
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Groups;
