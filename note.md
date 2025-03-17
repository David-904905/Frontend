# Styling in React

- In React, you can style your web applcation in various ways, you can use inline styling, you can use dynamic styling, external styling or even styling libraries such as bootstrap, or tailwind css.

## Inline Styling

- When working with inline styling, each html element has a style attribute, you can reference that style attribute and then use double braces before adding your styling

    e.g <h1 style={{backgroundColor: "teal", color: "white"}}>Welcome</h1>

## Dynamic Rendering

- You can also style your project dynamically, by adding your styling into a style object, and then rendering it dynamically using parenthesis

    const style = {
        backgroundColor: "teal",
        color: "white"
    }

    <h1 style={style}>Welcome</h1>


## External Styling

- Another way to style react components is to use external styling, making use of selectors, styling those selectors in an external file and then importing the file in the JSX file where you want to make use of it.


## Adding Icons 

- In order to add icons, you can use svgs, your own custom images, or you can use the ones available on websites like react-icons.

- npm install react-icons --save

- This is the page that you will visit to get your icons for styling https://react-icons.github.io/react-icons/

- In order to increase the size of the icon, use the fontsize property to style it.

- You can also give it a color and manipulate it to your satisfaction.


# Events in React

- In order to add an event to your react component, you have to add it as an attribute to its element definition, just as if you are specifying a prop

- e.g
    const ButtonElement = () => {
        return (
            <>
                <button onClick={() => console.log("You clicked me!")}>click me</button>
            </>
        )
    }



# States and Hooks in React

- State is a way to store and manage data that can chane over time and affects how the component renders. We define state using the useState Hook, which allows you to set an initial value and provides a way to update that state.

- Hooks are a new addition in React 16.8 that lets you use state and other React features without writing a class. The allow you to manage your state inside the functional based components.

- useState() -> This Hook allows us to track state in a functional component. State generally refers to data or properties that need to be tracked in an applicaition.

## useState

- The useState hook makes use of array destructuring. e.g

    const[data, changeData] = useState();

    where data is the data we are watching, and the changeData is the function that is going to change the state of that data.

- First of all, you have to import the useState from your project. e.g

    import {useState} from "react";