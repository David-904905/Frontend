const users = [
    {
        "username": "peter",
        "email": "peter@gmail.com",
        "location": "lagos"
    },
    {
        "username": "jericho",
        "email": "jerry@gmail.com",
        "location": "abuja"
    },
    {
        "username": "celestine",
        "email": "celestialbeing@gmail.com",
        "location": "abuja"
    }

]

const UserList = () => {
    return (
        <>
            <main>
                {
                    users.map(({username, email, location}, index) => (
                        <ul key={index}>
                            <li>{username}</li>
                            <li>{email}</li>
                            <li>{location}</li>
                        </ul>
                    ))
                }
            </main>
        </>
    )
}

export default UserList;
