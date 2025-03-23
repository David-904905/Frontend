# React JS Day 7

## The useReducer Hook

- useReducer is a hook that is similar to useState, but is designed for more complex state objects or state transitions that involves multiple subvalues. It allows you to manage state in a functional, immutable way.

- it has the syntax of

``` Javascript

const [state, dispatch] = useReducer(reducer, initialState)

```

- initialState -> This is the starting value for the state when the component first renders. This will be an object.

``` Javascript

const initialState = { count: 0};

```

- reducer -> This is a function that describes how the state should change based on actions. It takes the current state and an action as inputs, and returns a new state.

- reducer takes a state and action as the parameters for the function.


- dispatch -> This is a function you call to send actions to the reducer, which then updates the state.

- state -> This is the current state value, which you can use in your component.

