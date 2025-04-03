// Regular Functions

function addNum(a: number, b: number)
{
    return a + b;
}

const result = addNum(5, 5);
console.log(result);

// if you dont provide data types for parameters, a default type of any will be assigned to them.
const double = (x: number, y: number) => x * y;
const res = double(2, 10);
console.log(res);


const greet = (person: string = "Johnathan") => `Hello ${person}`;
let resone = greet();
console.log(resone);
let restwo = greet("Jacob");
console.log(restwo);

// you can specify the return type in typescript functions by adding a column and the datatype before you open parenthesis in your typescript funciton.

const subtract = (a: number, b: number): number =>  a - b;
let subresult = subtract(20, 10);
console.log(subresult);

function divide(a: number, b: number): number {
    return a / b;
}
let divideresult = divide(20, 10);
console.log(divideresult);

function voidFunction(): void // this specifies that the function does not have a return type.
{

}


// never return type

