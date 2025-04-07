var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    Human.prototype.getAge = function () {
        return this.age;
    };
    return Human;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, age, hobbies) {
        var _this = _super.call(this, name, age) || this;
        _this.hobbies = hobbies;
        return _this;
    }
    Person.prototype.getHobbies = function () {
        return this.hobbies;
    };
    return Person;
}(Human));
var Jacob = new Person('Jacob', 27, ['reading', 'running', 'coding']);
console.log(Jacob.name);
console.log(Jacob.getHobbies());
var Christiana = new Human('Christiana', 30);
console.log(Christiana.name);
console.log(Christiana.getAge());
var MyClass = /** @class */ (function () {
    function MyClass() {
        this._myProperty = 0;
    }
    Object.defineProperty(MyClass.prototype, "myProperty", {
        get: function () {
            return this._myProperty;
        },
        set: function (value) {
            this._myProperty = value;
        },
        enumerable: false,
        configurable: true
    });
    return MyClass;
}());
var myInstance = new MyClass();
console.log(myInstance.myProperty);
myInstance.myProperty = 10;
console.log(myInstance.myProperty);
