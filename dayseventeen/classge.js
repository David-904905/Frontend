var Human = /** @class */ (function () {
    function Human(initialAge) {
        this.age = initialAge;
    }
    Human.prototype.getAge = function () {
        return this.age;
    };
    Human.prototype.setAge = function (newAge) {
        this.age = newAge;
    };
    return Human;
}());
var Grace = new Human(1);
console.log(Grace.getAge());
Grace.setAge(35);
console.log(Grace.getAge());
