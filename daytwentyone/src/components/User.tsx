interface UserDetails
{
    name: string,
    age: number,
    isStudent: boolean
}


const User = (props: UserDetails) => {
    // props: {name: string; age: number; isStudent: boolean}
    return (
        <>
            <div className="contents">
                <h2>{props.name}</h2>
                <h2>{props.age}</h2>
                <h2>{props.isStudent}</h2>
            </div>
        </>
    )
}

export default User;