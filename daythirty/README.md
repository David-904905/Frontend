# Redux

- Reducx ensures predictability when state changes, it describes how the state in your applicaiton is being updated, and how your application logic will behave when those changes occur.

# Terminologies in Redux

## Actions

- An action is a plain JavaScript object that has a type field. It is an event that described something that happened in the application.

- The type field should be a descriptive name for the action performed. It is usually written as domain/eventName, where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.

- An action object can have additional information about what happened. By convention, we put that information in a field caled payload

``` JavaScript

const addTodoAction =
{
  type: "todos/todoAdded",
  payload: "Buy milk"
}

```

## Action Creators

- An action creator is a function that creates and returns an action object. It is used so you dont write the action object every time.


``` JavaScript

const addTodo = text => {
  return {
    type: "todos/todoAdded",
    payload: "text",
  }
}

```



## Reducers

- A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. 

## Creating Modals

- make use of states to control whether a modal is open or closed.

## In the shadow of your wings

- In the shadow of his wings, I know I am saved, in the shadow of his wings, I find relieve, cause you will hold me and you watch me, in your righteousness, I find rest, peace of mind, in the shadow of your wings.