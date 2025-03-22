# React JS Day Six

## React Hooks

## Prop Drilling

- When working with components, you find out that there is usually a property in one component that you want to pass down to another, but what if the other is nested deep in other components, how do you pass it? one way to do it is by passing the prop through its parent component, going deeper and deeper until you reach the component you want to store the data in. But now the problem arises, when you have millions of components, do you keep passing the prop through the millions of nested components? you can do that, but that will be time consuming and will not be the most efficient way to go about it. To solve this problem, tools like redux has been created. You can also solve this problem using Context API.


## Context API

- Context API is a feature that allows you to manaage and share state across your component tree without having to pass props down manually at every level. It's useful for scenarios where you need to share data or functions across many components, especially when these components are deeply nested.

- To make use of the Context API, you have to import createContext from the react library.

- When wrapping your component in your createContext, you will have two some options like provider, consumer, and display name, the provider simply means that that component is providing the data.

- Then when you are using the data, you make use of the consumer option. To consume the data, you have to import it from where you created it first.


``` JavaScript

import { createContext } from "react";

import "./App.css"

import PostComponent from "./components/PostComponent";
import BasicEffectComponent from "./components/BasicEffectComponent";
import CounterEffectComponent from "./components/CounterEffectComponent";
import FirstComponent from "./components/FirstComponent";

export const Data = createContext();

const App = () => {

  const author = "David Nduonofit"; // this author variables data is going to be drilled into other components

  return (
    <>
      
        <BasicEffectComponent />
        <PostComponent />      
        <CounterEffectComponent />
        <FirstComponent author={author} />
      
    </>
  )
}


export default App;


import SecondComponent from "./SecondComponent"

const FirstComponent = ({author}) => {

    <SecondComponent author={author} /> // the author prop drilled into the first component is passed into the second component

    return (
        <></>
    )
}

export default FirstComponent

```

## useContext Hook

- useContext Hook allows us to access the contetxt values provided by a context object directly within a functional component. Context provides a way to pass data through the component tree without having to pass props down manually at every level.


