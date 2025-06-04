# Framer Motion

- Framer Motion is a React JS library for animations and transitions.

- Framer motion supports drag, gestures, and layout animations, which can be hard to achieve with pure CSS.

## Writing your first animation

- First you need to import motion from framer-motion

``` JavaScript

import {motion} from 'framer-motion';

```

- Motion is an object that provides a set of components and hooks for creating animations and transitions in React applications.

- When we use <motion.element> we're indicating that we want to animate that specific <element>. Framer motion then provides additional props and features to facilitate those animations, such as initial, animate, and exit, allowing for more powerful and customizable animations.

- The initial prop is used to define the initial state of an animated component before it enters the DOM, it specify's how the element should appear when it first renders.

- The animate prop, this prop is used to create animations for a component. It lets you set target values for different CSS properties, making it easy to have smooth changes when the component's state updates.

- The exit prop is used to define the animation that occurs when a component is removed from the React tree. This is useful when creating transitions in which elements are unmounted/removed, enhancing the user experience by visually indicating that something has disappeared.

- Transformations allow you to change the shape, size, and position of elements on a webpage.

- 


## npx create-react-app --template typescript

