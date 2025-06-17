// icons
import { IoIosSave } from "react-icons/io";
import { FaShareFromSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaFileExport } from "react-icons/fa";

// utils
import { exportToPDF } from "../../../utils/Export2Pdf";

const date = new Date();

const NoteHeader = () => {
  return (
    <div className="note-meta-data">
      <div className="note-meta-data-container">
        <h2>Title: Yellow file</h2>
        <p>
          <strong>Created at: </strong>
          {date.toDateString()}
        </p>
        <p>
          <strong>Status:</strong> saved 3s ago
        </p>
      </div>
      <div className="accessibility-buttons">
        <div className="note-save-button">
          <button>
            <IoIosSave className="note-header-icons" />
          </button>
        </div>
        <div className="note-share-button">
          <button>
            <FaShareFromSquare className="note-header-icons" />
          </button>
        </div>
        <div className="note-export-button">
          <button onClick={() => exportToPDF('document')}><FaFileExport className="note-header-icons" /></button>
        </div>
        <div className="note-delete-button">
          <button>
            <MdDelete className="note-header-icons" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteHeader;
