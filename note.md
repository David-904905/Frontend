# Javascript 

- Javascript has an onload property which allows you to define behaviour when the window has loaded the entire page, including styleshheets and scripts.

- document.createElement("div"); // creating a new element with javaScript

- label.className => dynamically set the class name of an HTML element.

- container.appendChild(label) => The append child is used to add nest an element inside another.

- The Array constructor has the "fill" method, which can be used to fill an array with a value. 



## Currying

- Currying is a functional programming technique that transforms a function with multiple arguments into a sequence of functions, each taking a single argument.

- Functions have access to all variables declared at their creation, this is called closure.



## React Revision

- npm install react-icons --save

- sample of using a react icon revision
    import { AiFillAndroid } from "react-icons/ai";

    <AiFillAndroid />

- In order to use a state, you need to import it from the react library.

- A state is used to manage data that can change over time.

- import { useState } from "react";

- const [count, setCount] = useState(0);

- In the previous line above, the state of the count variable is set to zero, and with the aid of the setCount function, we can change the value of the count variable.

- const increment = () => setCount(count + 1); // uses the setCount variable to increase the value of the count variable.


# React JS tutorial 18th March 2026

## Sharing state with other components

- In order to share state between components, you can make use of props, and pass the state variable or the data to be shared as the value of the prop.

 import { useState } from "react";

 const [count, setCount] = useState(0);

 <ComponentOne count={count} />
 <ComponentTwo count={count} />

 now these two components share the same count data.

- If you pass in a callback function as the initial value of your state, the function will only run when your component gets rendered.

## useEffect Hook

- The useEffect is a React Hook used to handle side effects in functional components. Side effects include things like fetching data, updating the DOM, subscribing to events and managing timers.

- To make use of the useEffect react hook, you have to import it

    import { useEffect } from "react";

    useEffect(() => {
        // your logic here;
    });
