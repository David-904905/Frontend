# React JS Day 8

## React JS Hooks Continued

## Custom Hooks

- Custom Hooks are JavaScript functions that start with the prefix use (e.g useFetch, useForm) and can call other hooks within them. They allow you to extract and reuse logic that involves state or side effects, making your components more readable and maintainable.

- If we notice that we will want to use a hook to perform a particular operation over and over again, instead of us redefining the hook anytime we want to use it, we can create a custom hook, that custom hook is then called over and over a gain when that particular operation is to be performed.

## The useId hook

- The useId hook in React is used to generate unique IDs for components.

``` Javascript

import {useId} from "react";

const id = useId();

// This is the basic syntax of useId

```

