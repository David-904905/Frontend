const reducer = (state, action) => {
    switch(action.type)
    {
        case "increment":
            return {...state, count: state.count + 1}
        case "decrement":
            return {...state, count: state.count - 1}
        case "reset":
            return {...state, count: state.count = 0}
        case "user-increment":
            return {...state, count: state.count + Number(action.inputValue)}
        case "user-decrement":
            return {...state, count: state.count - action.inputValue}
        default:
            return state

    }
}

export default reducer;