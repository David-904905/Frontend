import { use, FC } from "react";
import { fetchUser } from "../lib/fetchUser";

interface Data
{
    userId: number;
}

const UserProfile: FC<Data> = ({userId}) => {
    const user = use(fetchUser(userId))
    
    return (
        <section className="userProfile">
            <div className="user-details">
                <h2>Name: {user.name}</h2>
                <p>Email: {user.email}</p>
            </div>
        </section>
    );
}


export default UserProfile