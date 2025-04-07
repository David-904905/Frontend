# TypeScript Continuation

## Tuples

- A tuple is a type that represents an array with a fixed number of elements, where each element can have different type. The order of the types in the tuple definition corresponds ot the order of the values in the actual array. Tuples are similar to arrays, but they have a specific structure and can be used to model finite sequences with known lengths.


## Enums

- Enum is a way to define a set of named constants. Enums allow you to define a collection of related values that can be used interchangeably in your code.


Kiso //

lets say your defining a weather app, and you want to define a set of fixed conditions, you can use an enum for this. Another example is the state of a car, if it is powered off or powered on you can use an enum for this also. Another is status of a transaction, if it is pending, successful or failed.


## Class Properties Annotations

- Class properties can be annotated with a type, this allows you to define the data type of a property, making sure it stays consistent.


## Access Modifiers

- You can use access modifiers to control the visibility of class members (properties and methods). Access modifiers determine the way in which class members can be accessed from within and outside the class.

- There are three types of access modifiers in TypeScript.

- Public, Private and Protected.

- Protected members can be accessed dfrom within the class they are defined in, as well as any subclasses that extend the class.


## Getters & Setters

- Getters and setters are used to access and modify class properties. Getters and setters allow you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value.


## Interface

- Interface is a way to define a contract for the shape of an object. It specifies the properties and their types that an object must have. Interfaces are a powerful tool for enforcing a certain structure in your code.

- While interfaces are commonly used to define the structure of objects, they are not limited to just objects. Interfaces in TypeScript can also be used to describe the shape of functions and classes.


## Declaration Merging

- Once an interface is declared, it cannot be directly modified. However, TypeScript allows what is informally referred to as "declaration merging" or "interface extension" which is often misconstrued as "re-opening".

- Declaration merging in TypeScript referes to the ability to extend or augment an existing declaration, including interfaces. This can be useful when you want to add new properties or methods to an existing interface without modifying the original declaration.

## Generics 

- In TypeScript, generics allow you to create reusable componenet that can work with a variety of types. Generics make it possible for you to define functions, classes, and interfaces that can work with different data types without having to duplicate code.

``` TypeScript

function printInfo<T>(x: T): T {
    return x;
}

const str = printInfo<string>("Hello");
