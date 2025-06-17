// react
import { useEffect } from "react"

// components
import FolderComp from "../FolderComp"

// styling
import "@css/folder.css";


const FolderModal = () => {
  return (
    <div className="outer-folder-modal">
        <div className="inner-folder-modal">
            <div className="modal-folder-name">
                <h2>Documents</h2>
            </div>
            
        </div>
    </div>
  )
}

export default FolderModal;