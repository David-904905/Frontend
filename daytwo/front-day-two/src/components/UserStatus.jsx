const UserStatus = ({loggedIn, isAdmin}) => {
    return (
        <>
            { loggedIn && isAdmin && <p>Welcome Admin</p>}
            { loggedIn && <p>Welcome User</p>}
        </>
    ) 
}

export default UserStatus;