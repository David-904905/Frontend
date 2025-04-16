class Dog
{
    bark(): void
    {
        console.log("Woof Woof");
    }
}

class Cat
{
    meow(): void
    {
        console.log("Meow meow");
    }
}

function animalSound(animal: Cat | Dog): void
{
    if(animal instanceof Dog)
    {
        animal.bark();
    }
    else
    {
        animal.meow();
    }
}

const jordan: Cat = new Cat();
const jefrey: Dog = new Dog();

animalSound(jordan);
animalSound(jefrey);