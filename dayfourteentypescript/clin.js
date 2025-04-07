var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log('The car engine has been started');
    };
    Car.prototype.stop = function () {
        console.log("The car engine has been turned off");
    };
    return Car;
}());
var Porche = new Car();
console.log(Porche.start());
setInterval(function () {
    console.log(Porche.stop());
}, 5000);
var Roxane = {
    name: 'Roxane',
    age: 3,
    weight: 25,
    breed: 'Belgian Malinois'
};
console.log(Roxane.name);
console.log(Roxane.breed);
