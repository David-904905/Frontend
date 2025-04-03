const User: { firstname: string; phone: number; age: number } = {
    firstname: "John",
    phone: 3242,
    age: 50
}


// you can also use objects as function return value

// this is a user defined type
type FunctionReturn = {
    name: string,
    number: number,
    age: number
}

function printUser(): { name: string; no: number; age: number } // specifying what the function will return
{
    return {
        name: "Alex",
        no: 5342,
        age: 87
    }
}

function printUserTwo(): FunctionReturn // specifying that our function returns our user created type of FunctionReturn
{
    const Person: FunctionReturn = { //specifying that our Person object is of type FunctionReturn
        name: "Peter",
        age: 3,
        number: 53743
    }
    return Person
}