import { useState } from "react";

const FriendComponent = () => {

    const [friends, setFriend] = useState(["David", "Jesus", "Wisdom"]);

    const addNewFriend = () => setFriend([...friends, "Understanding"]);
    const removeFriend = () => setFriend(friends.filter((friend) => friend !== "Understanding"));
    const updateOneFriend = () => setFriend(friends.map((friend) => friend === "Understanding" ? "Supreme Understanding" : friend ))
    // removing something specfic from the list

    return (
        <>
            <div className="backgroundTile">
                    {friends.map((friend, index) => (
                        <ul key={index}>
                            <li>{friend}</li>
                        </ul>
                    ))}
            </div>
            <button onClick={addNewFriend}>Add new friend</button>
            <button onClick={removeFriend}>Remove one friend</button>
            <button onClick={updateOneFriend}>Update one friend</button>
        </>
    )
}

export default FriendComponent;