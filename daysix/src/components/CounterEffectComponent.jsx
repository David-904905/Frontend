import { useState, useEffect } from "react";

const CounterEffectComponent = () => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log("This use effect has been fired");
    }, [count])

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount( count + 1) }>Increment</button>
        </>
    )

}

export default CounterEffectComponent;