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