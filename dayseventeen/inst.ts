class Dog
{
    bark()
    {
        console.log("Ruff Ruff");
    }
}


class Cat
{
    meow()
    {
        console.log("meow meow meow!");
    }
}


const sussan = new Cat();
const pete = new Dog();

const makeSound = (animal: Dog | Cat): void =>
{
    if(animal instanceof Cat)
    {
        animal.meow();
    }
    else
    {
        animal.bark();
    }
}

makeSound(pete);