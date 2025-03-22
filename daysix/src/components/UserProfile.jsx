import { useContext } from "react";
import { UserContext } from "./UserProviderComponent";

const UserProfile = () => {
    const {userName, setUserName} = useContext(UserContext);

    const changeName = (e) => {
        setUserName(e.target.value)
    }
    return (
        <>
            <p>Welcome: {userName}</p>
            <input type="text" onChange={(e) => changeName(e)} />
        </>
    )
}


export default UserProfile;