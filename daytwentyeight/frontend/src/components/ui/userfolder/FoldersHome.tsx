import useAuth from "@hooks/useAuth";
import { useEffect } from "react";

const FoldersHome = () => {
  const { setIsHome } = useAuth();;
  useEffect(() => {
    setIsHome(false);
  }, []);
  return <div>FoldersHome</div>;
};

export default FoldersHome;
