"use strict";
class Dog {
    bark() {
        console.log("Woof Woof");
    }
}
class Cat {
    meow() {
        console.log("Meow meow");
    }
}
function animalSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const jordan = new Cat();
const jefrey = new Dog();
animalSound(jordan);
animalSound(jefrey);
