const string = "a";

console.log(string.charCodeAt(0)); // This returns the ASCII number for that character


// creating an input element dynamically and then setting its type attribute and id attribute.

const input = document.createElement("input");
input.type = "text";
input.id = letter + number;


// finding the sum of an array using the reduce method const sum = (nums) => nums.reduce((acc, el) => acc + el, 0)

// You can monitor an html value for when the value changes by using the onchange property.

const updateFunction = () => {
    window.alert("The input value has been changed")
}

input.onchange = updateFunction;

const value = input.value;


const rangeRegex = /([A-J])([1-9][0-9]?)/; // The question mark means that the character class is optional.

// The concept of returning a function within a function is called currying.

const addCharacters = character1 => character2 => {}; // addCharacters is a function which takes a character1 parameter and returns a function which takes a character2  parameter

