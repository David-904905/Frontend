import { useState } from "react";

const TypedState = () => {
  const [count, setCount] = useState<number>(0);
  // React.Dispatch<React.SetStateAction<number>> i.e this is the type of setCount
  // count is of type number

  return (
    <>
      <div className="container">
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </>
  );
};

export default TypedState;
