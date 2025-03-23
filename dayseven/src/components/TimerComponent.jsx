import { useRef, useState, useEffect } from "react";

const TImerComponent = () => {
    const timerRef = useRef(null)

    const [count, setCount] = useState(0);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000);

        // clean up function
        return () => {
            clearInterval(timerRef.current);
        }
    })
    return (
        <>
            <p>Timer {count} seconds</p>
            <button onClick={() => clearInterval(timerRef.current)}>Stop Timer</button>
        </>
    )
}

export default TImerComponent;