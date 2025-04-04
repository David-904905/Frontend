# Day 13 React JS

## Intersection Types

- An intersection type is a way to combine multiple types into a single type that includes all the properties and methods of each constituent type. An intersection type is denoted by the & symbol.

e.g

``` TypeScript

type PersonAndEmployee = Person & Employee;

```

## Union Types

- Unions are used to declare a type that can have one of several possible types. Unions are useful when we want to allow a variable or parameter to accept multiple types.

In order to create a union, you use a pipe operator |.

``` TypeScript

let password: string | number = 1;

```

## Literal Types

- Literal types allow you to specify a value that can only be one specific literal value. This means that a variable with a literal type can only have one specific value and no other.

``` TypeScript

let isTrue: true;

let color: 'red' | 'blue' | 'green';

// trying to assign any other value to the variables above will result in an error.

```


## Tuples

- A Tuple is a type that represents an array with a fixed number of elements, where each element can have a different type. The order of the types in the tuple definitino corresponds to the order of the values in the actual array. Tuples are similar to arrays, but they have a specific structure and can be used to model finite sequences with known lengths.

