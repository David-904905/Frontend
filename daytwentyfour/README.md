# React 19 Features

- React 19 now includes its own compiler, which will not only speed up performance but also automate certain tedious tasks, reducing the workload for developers.

- React 19 does not longer need memorization, the process of optimizing components to prevent unnecessary re-renders. Previously we relied on hooks like useMemo and useCallback for this purpose, but these are now obsolete in React JS.

- React 19 now supports meta data, which is used for SEO and accessibility practices.

- Directives

React 19 now includes built-in support for use client and use server directives. This allows components to be rendered on the server, resulting in improved SEO, faster page load times, and more straightforward data fetching.




## React 19 New Hooks

### Use hook

- The use hook lets you read and load resources asynchronously, such as promises or context. Unlike other hooks, it can be utilized in loops and conditionals.

- It can serve as a replacement for the useEffect hook.

- In order to make use of the use hook, you have to wrap it inside a suspense class tag inside your app.jsx. i.e just as you would wrap the provider for your context around the components that will make use of it.


### useFormStatus hook

- This hook returns the status information of the last form submission.

``` JavaScript

const {pending, data, method, action} = useFormStatus();

```



## Actions

- React 19 introduces Actions, which are asynchronous functions designed to simplify form sbumissions. Actions can be utilizd on both the client and server sides.

- The useActionState is a Hook that allows you to update state based on the result of a form action.

``` JavaScript

const [state, formAction] = useActionState(fn, initialState);


```


## Use

- The use hook allows you to unwrap promises directly inside components

- This hook can only be used if you are making use of a framework that supports server components like next js, react with cra of vite will not work.

- We can consume contexts directly using this hook, instead of using useContext to consume or context, we can just use 'use' and it will work the same way as useContext, There is no difference really in the aspect of consuming contexts, lol, maybe just cause of a shorted name to type :).