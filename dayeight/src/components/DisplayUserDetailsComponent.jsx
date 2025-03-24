import { useContext } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";

const DisplayUserDetailsComponent = () => {

    const {username, setUserName} = useContext(UserContext)

    return (
        <>
            <input type="text" value={username} onChange={(e) => setUserName(e.target.value) } />
            <p>The current username is: {username}</p>
        </>
    )
}

export default DisplayUserDetailsComponent;