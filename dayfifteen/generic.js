function printInfo(x) {
    return x;
}
// In this function, T is a type, in the parameter, we say the x is of type T and the function returns a value of type T
// that is why T has to be defined first
// the <Type> is a type parameter area.
var str = printInfo('water');
var num = printInfo(54);
console.log(str);
console.log(num);
var Roxane = {
    name: "Roxane",
    breed: "Belgian Malinoi"
};
var roxane = printInfo(Roxane);
console.log(roxane);
