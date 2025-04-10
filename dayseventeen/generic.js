function getRandomKeyValuePair(obj) {
    var keys = Object.keys(obj);
    var randomKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randomKey, value: obj[randomKey] };
}
console.log(getRandomKeyValuePair({ "apple": true, "banana": true, "orange": true }));
function filterArray(array, condition) {
    return array.filter(function (item) { return condition(item); });
}
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var condition = function (item) { return item % 2 === 0; };
var result = filterArray(numberArray, condition);
console.log(result);
var wordArray = ['peter', 'paul', 'timothy', 'james', 'john'];
var shortWords = filterArray(wordArray, function (word) { return word.length < 5; });
console.log(shortWords);
var roxane = {
    name: "Roxane",
    breed: "German Sheperd",
    weight: 29
};
var peggy = {
    name: "Peggy",
    breed: "Belgian Malinois",
    weight: 25
};
var DogArray = [roxane, peggy];
var mediumDog = filterArray(DogArray, function (dog) { return dog.weight === 25; });
console.log(mediumDog);
