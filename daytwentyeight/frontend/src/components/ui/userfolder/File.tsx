import useAuth from "@hooks/useAuth";
import { useEffect } from "react";

const File = () => {
  const { setIsHome } = useAuth();;
  useEffect(() => {
    setIsHome(false);
  }, []);
  return <div>File</div>;
};

export default File;
