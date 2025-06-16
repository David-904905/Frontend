import useAuth from "@hooks/useAuth";
import { useEffect } from "react";

const Folder = () => {
  const { setIsHome } = useAuth();;
  useEffect(() => {
    setIsHome(false);
  }, []);
  return <div>Folder</div>;
};

export default Folder;
