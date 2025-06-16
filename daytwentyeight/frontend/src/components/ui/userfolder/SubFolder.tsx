// react
import { useEffect } from "react";

// react dom
import { useParams } from "react-router-dom";

/// contexts
import useAuth from "@hooks/useAuth";

const SubFolder = () => {
  let { folder_uuid } = useParams();
  console.log(folder_uuid);

  const { setIsHome } = useAuth();
  useEffect(() => {
    setIsHome(false);
  }, []);
  return <div>SubFolder</div>;
};

export default SubFolder;

// if you defined search params, i.e values after ? in the URL, they can be
// accessed using useSearchParams
// import {useSearchParams} from "react-router-dom";
// let [searchParams] = useSearchParams();


// celine dion power of love
