import { useReducer } from "react";

import reducer from "../counterReducer";
import { State } from "../counterReducer";

const initialState: State = {
    count: 0
}

const Counter = () => {
    const [countObject, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div className="container">
                <h2 className="">{countObject.count}</h2>
                <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
                <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
                <button onClick={() => dispatch({type: "DOUBLE DECREMENT"})}>double</button>
            </div>
        </>
    )
}

export default Counter;