import { useState, useEffect } from "react"

const Profile = () => {
    const [name, setName] = useState(() => {
        const saveName = localStorage.getItem("name");
        return saveName ? JSON.parse(saveName) : "";
    })
    const [age, setAge] = useState(() => {
        const saveAge = localStorage.getItem("age");
        return saveAge ? JSON.parse(saveAge) : "";
    })

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name));
        localStorage.setItem("age", JSON.stringify(age));
    },[name, age])

    const handleNameInput = (event) => {
        setName(event.target.value);
    }

    const handleAgeInput = (event) => {
        setAge(event.target.value);
    }

    const clearInput = () => {
        setName("");
        setAge("");
    }


    return (
        <>  
            <div className="nameSection">
                <h2>Name: {name}</h2>
                <h3>Age: {age}</h3>
            </div>

            <div className="profileInput">
                <form>
                    <label htmlFor="nameInput">Name: </label>
                    <input type="text" id="nameInput" name="nameInput" value={name} onChange={handleNameInput} />
                    <label htmlFor="ageInput">Age: </label>
                    <input type="text" id="ageInput" name="ageInput" value={age} onChange={handleAgeInput} />
                    <button onClick={clearInput}>Clear Input</button>
                </form>
            </div>
        </>
    )
}

export default Profile;