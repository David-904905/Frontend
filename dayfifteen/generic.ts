function printInfo<T>(x: T): T {
    return x
}

// In this function, T is a type, in the parameter, we say the x is of type T and the function returns a value of type T
// that is why T has to be defined first

// the <Type> is a type parameter area.


const str = printInfo<string>('water');
const num = printInfo<number>(54);

console.log(str);
console.log(num);

// you can also use an interface to define the type for your generic

interface Dog {
    name: string;
    breed: string;
}

const Roxane: Dog = {
    name: "Roxane",
    breed: "Belgian Malinoi"
}

const roxane = printInfo<Dog>(Roxane);
console.log(roxane);