type Person = {
    firstName: string,
    lastName: string,
    age: number,
    address?: string,
    readonly nin?: number // this means you can only read this property, but you cannot edit it.
}

const PrintPerson = (user: Person): void =>
{
    console.log(`Firstname: ${user.firstName}, Lastname: ${user.lastName}, Age: ${user.age} ${user.address? `Address: ${user.address}` : ''}`);
}

const Peter: Person = {
    firstName: 'John',
    lastName: 'Peter',
    age: 32,
}

PrintPerson(Peter);