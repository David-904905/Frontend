import { useState } from "react";

const CallBackCount = () => {
    const [count, setCount] = useState(() => {
        const initialCount = 10;
        return initialCount
    })

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };
  return (
    <>
        <p>{count}</p>
        <button onClick={increment}> + </button>
    </>
  )
}

export default CallBackCount;