import { useState } from "react"

const RandomNumberComponent = () => {
    const [randomNumber, setRandomNumber] = useState(() => {
        const random = Math.floor(Math.random() * 100);
        return random;
    });

    const generateRandomNumber = () => {
        setRandomNumber(Math.floor(Math.random() * 100));
    }
    return (
        <>
            <h4>{randomNumber}</h4>
            <button onClick={generateRandomNumber}>Generate New Number</button>
        </>
    )
}

export default RandomNumberComponent