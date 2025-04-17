export type State = {count: number};

type Action = {type: "INCREMENT"} | {type: "DECREMENT"} | {type: "DOUBLE DECREMENT"};

const reducer = (state: State, action: Action): State => {
    switch(action.type)
    {
        case "INCREMENT":
            return {...state, count: state.count + 1}
        case "DECREMENT":
            return {...state, count: state.count - 1}
        case "DOUBLE DECREMENT":
            return {...state, count: state.count + 2}
        default:
             return state

    }
}


export default  reducer