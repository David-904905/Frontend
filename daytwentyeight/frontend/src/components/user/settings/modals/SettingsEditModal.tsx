import { useSettings } from "@hooks/useSettings";
import { useEffect, useState } from "react";

import { FaCheckCircle } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";

const SettingsEditModal = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>();
  const { setShowEditModal } = useSettings();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowEditModal(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="settings-search-modal" onClick={() => setShowEditModal(false)}>
      <div className="modal-wrapper "  onClick={(e) => e.stopPropagation()}>
        <div className="modal-search-header">
          <h2 className="text-[25px] font-bold">Edit</h2>
        </div>
        <div className="search-input-n-button fname-email-overide">
          <div className="modal-input">
            <label htmlFor="profile-picture" className="flex gap-5 items-center">Profile Picture: <MdAddAPhoto className="text-xl" /></label>
            <input type="file" id="profile-picture" className="hidden" /><br />
            <label htmlFor="settings-fname-edit">Full Name: </label>
            <br />
            <input
              type="text"
              name="settings-fname-edit"
              id="settings-fname-edit"
              value={fullName}
              placeholder="name..."
              className="bg-neutral-200 text-neutral-950 "
              onChange={(e) => setFullName(e.target.value)}
            />{" "}
            <br />
            <label htmlFor="settings-email-edit">Email: </label>
            <br />
            <input
              type="email"
              name="settings-email-edit"
              id="settings-email-edit"
              placeholder="email..."
              value={email}
              className="bg-neutral-200 text-neutral-950"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="edit-fn-em-overide flex justify-center">
            <FaCheckCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsEditModal;