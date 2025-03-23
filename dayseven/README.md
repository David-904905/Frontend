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


## The useRef Hook

- useRef Hook provides a way to access and interact with DOM elements or to persist values across renders without causing a re-render.

- We can use this hook to manipulate an element accross the DOM.


## Discoveries

- You can change the name of your last git commit using the following command 

```
 git commit --amend -m "New commit message" 

```

- In order to convert an input value to number, you can use the Number function or just add + sign before the input value and it will be changed to a number

``` Javascript

Number(inputValue) // This works

+inputValue // this works also

```



