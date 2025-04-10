// generics being used in a class
class Human<T>
{
    private age: T;

    constructor(initialAge: T)
    {
        this.age = initialAge;
    }

    getAge(): T
    {
        return this.age;
    }

    setAge(newAge: T): void
    {
        this.age = newAge;
    }
}

const Grace = new Human<number>(1);
console.log(Grace.getAge());
Grace.setAge(35);
console.log(Grace.getAge());