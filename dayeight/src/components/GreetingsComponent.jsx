import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const GreetingsComponent = () => {

    const {username, _setUserName} = useContext(UserContext)

    return (
        <>
            <p>Welcome: {username}</p>
        </>
    )
}


export default GreetingsComponent; // making use of the data shared in the context once again.