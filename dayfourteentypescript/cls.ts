class Human   
{
    readonly name: string;
    private readonly age: number;
    protected hobbies: Array<string>;

    constructor(name: string, age: number)
    {
        this.name = name;
        this.age = age;
    }

    public getAge(): number
    {
        return this.age;
    }
}


class Person extends Human
{
    constructor(name: string, age: number, hobbies: Array<string>)
    {
        super(name, age);
        this.hobbies = hobbies;
    }

    public getHobbies(): Array<string>
    {
        return this.hobbies;
    }
}


const Jacob = new Person('Jacob', 27, ['reading', 'running', 'coding']);

console.log(Jacob.name);
console.log(Jacob.getHobbies());

const Christiana = new Human('Christiana', 30, );
console.log(Christiana.name);
console.log(Christiana.getAge());



class MyClass {
    private _myProperty: number = 0;

    get myProperty(): number
    {
        return this._myProperty
    }

    set myProperty(value: number) {
        this._myProperty = value;
    }
}

const myInstance = new MyClass()
console.log(myInstance.myProperty);

myInstance.myProperty = 10;
console.log(myInstance.myProperty);