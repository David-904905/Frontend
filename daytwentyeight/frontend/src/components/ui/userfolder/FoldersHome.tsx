// react
import { useEffect } from "react";

// hooks
import useAuth from "@hooks/useAuth";

//css
import "@css/folder.css";
import AccessibilityBar from "../../others/AccessibilityBar";
import NoFolders from "@common/fallbacks/NoFolders";
import FolderComp from "./FolderComp";

// types
import type { Folder } from "@interfaces/Interface";


const sampleFolder: Folder = {
  type: "folder",
  folderName: "Documents",
  folderUUID: "abc-123",
  folderInternals: [
    {
      type: "file",
      fileName: "resume.pdf",
      fileSize: 32000,
      modifiedAt: new Date(),
      creationDate: new Date(),
    },
    {
      type: "folder",
      folderName: "Subfolder",
      folderUUID: "def-456",
      folderInternals: [],
    },
  ],
};

const FoldersHome = () => {
  const noFolder = false;
  const { setIsHome } = useAuth();
  useEffect(() => {
    setIsHome(false);
  }, []);
  return (
    <div className="folder-main-container">
      <AccessibilityBar />
      {noFolder ? <NoFolders /> : <FolderComp folderName={sampleFolder.folderName} type="folder" folderUUID="dospwl-4329-sxa1" folderInternals={sampleFolder.folderInternals} />}
    </div>
  );
};

export default FoldersHome;
