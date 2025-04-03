# TypeScript Intro

- To run typescript files, you can either use tsc <filename> or install tsx and use tsx <filename>

- Using tsc creates a js file with your typescript code, which you can then run using node js.


## Annotations

- Annotations are used to specify the data type of a variable, parameter, function return value, and other types of values. Annotations help developers catch errors early in development by allowing them to specify what types of values can be assigned to a given variable or passed as an argument to a function.

## Type Inference

- Type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its value. In other words, if you declare a variable without explicitly speficying its type, TypeScript will try to infer the type based on the value you assign to it.

## Any Type

- TypeScript has a special any type that can be used to represent any type. When a variable is annotated with the any type, TpyeScript will allow it to have any value and disable all type checking for that variable and its properties.

``` TypeScript

let color: any = "crimson";
color = 20;
color = true;
color();
color.toUpperCase();
console.log(color);


```

## Function Parameters Annotations

- Function parameter annotations in TypeScript are used to specify the expected types of the parameters that a function takes.

- Functions whose parameter(s) have no type will initially be assigned a type of any by TypeScript.

### Default Params Value

``` TypeScript

function greet(person: string= "Johnathan") => `Hello ${perosn}`;
let res = greet();
console.log(res); // Johnathan is printed in the console.
let resp = greet("Peter");
console.log(resp); // Peter is printed in the console.


```

### Return Value Annotations

- In TypeScript, you can specify the return values of functions by add a colon and the return type before you open your braces.

``` TypeScript

const double = (n: int, m: int): number => n * m

```

### Void  in TypeScript

- Void is a type that represents the absence of any value. It is often used as the return type for functions that do not return a value.


### Never in TypeScript

- The never keyword is used to indicate that a function will not return anything, or that a variable can never have a value. The never type is useful for indicating that certain code paths should never be reached, or that ceratain values are impossible. It can help catch errors at compile-time instead of runtime.

- Never can be used for a function that always throws an error.

- A function that has an infinite loop.

- A variable that can never have a value.


- The void type indicates that a functin does not return a value. It's typically used for functions that perform an action but don't need to return anything to the caller.

- The never type indicates that a function never completes. This means the function does not return normally. It can either throw an error or enter an infinite loop, effectively never returning a value.


## Arrays Types

- Arrays are a type of object that can store multiple values of the same data type. Arrays in TypeScript are typed, which means you can specify the type of values that an array can hold.

### 2 Types of Arrays

- Using the square bracket notation [] to indicate an array of a specific type.

- Using the generice Array<type> notation to indicate an array of a specific type.


### Multi Dimensional Arrays

- A multi-dimensional array is an array that contains othe rarrays as its elements. Multi-dimensional arrays can be defined using the same notation as one-dimensional arrays, but with nested square brackets.


## Objects

- An object in TypeScript is a structured data type that represents a collection of properties, each with a key and an associated value. 

- The properties of an object can have specific types, and the object itself can be annotated with a type, often defined using an interface or a type alias. 

- TypeScript uses structural typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility.



## Type Aliases

- A type alias is a way to create a new name for an existing type. It allows you to define a custom type that refers to another type and give it a more meaningful or descriptive name.

- Type aliases are defined using the type keyword, followed by the name of the alias, an equal sign (=), and the type it refers to.

## Optional Properties

- You can make a certain property optional in an object type by adding a question mark after the property name.
