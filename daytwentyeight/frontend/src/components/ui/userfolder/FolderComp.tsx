// react
import { useEffect } from "react";

// hooks
import useAuth from "@hooks/useAuth";

// types
import type { Folder } from "@interfaces/Interface";

// styling
import "@css/folder.css";

// icons
import { FaFolderClosed } from "react-icons/fa6";

const FolderComp = (folder: Folder) => {
  const { setIsHome } = useAuth();
  useEffect(() => {
    setIsHome(false);
  }, []);


// dummy data
// const sampleFolder: Folder = {
//   type: "folder",
//   folderName: "Documents",
//   folderUUID: "abc-123",
//   folderInternals: [
//     {
//       type: "file",
//       fileName: "resume.pdf",
//       fileSize: 32000,
//       modifiedAt: new Date(),
//       creationDate: new Date(),
//     },
//     {
//       type: "folder",
//       folderName: "Subfolder",
//       folderUUID: "def-456",
//       folderInternals: [],
//     },
//   ],
// };

// const dummyData: Array<Folder> = [sampleFolder];
  return <div className="folder-component-container">
    <FaFolderClosed className="folder-icon-large" />
    <h5>{folder.folderName}</h5>
  </div>;
};

export default FolderComp;
