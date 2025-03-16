const Person = ({name, age}) => {
    return (
        <>
            <div className="backgroundTile">
                <h2>Name: {name}</h2>
                <p>Age: {age}</p>
            </div>
        </>
    )
}

export default Person;