let message: string = 'Hello, World!';
let firstname: string = 'DavidFortune';
let age: number = 34;
let isCurious: boolean = true;
// console.log(message);
// console.log(firstname, age);

let tech = 'TypeScript'; // if you hover your mouse on the variable you'll see that typescript assigns the variable of string to it.
// to check the type of a variable in ts, use the typeof command
console.log(typeof tech);


type Person = {
    firstName: string;
    lastName: string;
    age: number;
}

const person: Person = {
    firstName: "DavidFortune",
    lastName: "Nduonofit",
    age: 50
}

console.log(person.age);
console.log(person.firstName);
console.log(person.lastName);


// any data type

let color: any = "crimson";
color = true;
// color(); This will raise an error.
console.log(color);

