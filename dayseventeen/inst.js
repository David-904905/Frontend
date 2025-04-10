var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("Ruff Ruff");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("meow meow meow!");
    };
    return Cat;
}());
var sussan = new Cat();
var pete = new Dog();
var makeSound = function (animal) {
    if (animal instanceof Cat) {
        animal.meow();
    }
    else {
        animal.bark();
    }
};
makeSound(pete);
