// This is an example of an interface being used with a function.
interface MathOperation
{
    (x: number, y: number): number;
}

const Addition: MathOperation = (a, b) => a + b;
const Division: MathOperation = (a, b) => a / b;

console.log(Addition(1, 1));
console.log(Division(1, 2));


interface User
{
    username: string;
    email: string;
    password: string;
    age: number;
    hobbies: Array<string>;
}


const Peter: User = {
    username: 'peter324',
    email: 'peter@mail.com',
    password: 'matpete4095',
    age: 50,
    hobbies: ['reading', 'traveling', 'journaling'],
}

console.log(Peter.username, Peter.email, Peter.hobbies);
