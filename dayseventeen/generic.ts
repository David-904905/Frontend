function getRandomKeyValuePair<T>(obj: {[key: string]: T}): {key: string, value: T}
{
    const keys = Object.keys(obj)
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    return {key: randomKey, value: obj[randomKey]}
}

console.log(getRandomKeyValuePair<boolean>({"apple": true, "banana": true, "orange": true}));


function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter(item => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const condition: (item: number) => boolean = item => item % 2 === 0;

const result = filterArray<number>(numberArray, condition);
console.log(result);

const wordArray: string[] = ['peter', 'paul', 'timothy', 'james', 'john'];
const shortWords = filterArray<string>(wordArray, (word) => word.length < 5);
console.log(shortWords);

interface Dog
{
    name: string,
    breed: string,
    weight: number
}

const roxane: Dog = {
    name: "Roxane",
    breed: "German Sheperd",
    weight: 29
}

const peggy: Dog = {
    name: "Peggy",
    breed: "Belgian Malinois",
    weight: 25
}


const DogArray: Dog[] = [roxane, peggy];


const mediumDog = filterArray<Dog>(DogArray, (dog) => dog.weight === 25);
console.log(mediumDog);