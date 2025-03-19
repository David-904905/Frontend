# Javascript Tutorial

- In mathematics, an infix is a mathematical operator that appears between its two operands. For example, 2 + 2 is an infix expression.

- You can use parseFloat to convert from a string to a float.

- In JavaScript, arrays have an "every" method that accepts a callback function which should take an element of an array as the argument, the every method will return true if the callback function returns true for all elements in the array.

- Javascripts random method does not take any arguments, in order for you to define a random number within a range, you will have to do it this way

Math.floor(Math.random() * (max - min) + min);

- Declaring a range in javascript 

const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);

- Check for duplicates in an array 
nodupes: nums => [...new Set(nums).values()]

- The onsubmit event handler is used to handle a form submission event.

- useState is one of the most important concepts in ReactJS, so you have to fully understand the useState.

