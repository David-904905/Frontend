import { useState } from "react";
import { useEffect } from "react";


const StateExampleThree = () => {
    const [name, setName] = useState(() => {
        const saveName = localStorage.getItem("name");
        return saveName ? JSON.parse(saveName) : "";
    });

    const handleChange = (event) => {
        setName(event.target.value); // you can use this to update the name field as the user is entering in the name value, making it realtime
    };

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name))
    }, [name])


    const handleClear = () => setName("")
    
    return (
        <>
            <h2>Your name: {name}</h2>
            <input type="text" value={name} onChange={handleChange} />
            <button onClick={handleClear}>Clear Input</button>
        </>
    )
}

export default StateExampleThree