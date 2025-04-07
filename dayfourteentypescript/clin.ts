interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle
{
    start(): void {
        console.log('The car engine has been started');
    }
    stop(): void {
        console.log("The car engine has been turned off");
    }
}

const Porche = new Car();
console.log(Porche.start());
setInterval(() => {
    Porche.stop();
}, 5000);


// interfaces can also extend other interfaces

interface Dog {
    name: string,
    age: number,
    weight: number,
}

interface DogBreed extends Dog
{
    breed: string,
}


const Roxane: DogBreed =
{
    name: 'Roxane',
    age: 3,
    weight: 25,
    breed: 'Belgian Malinois'
}

console.log(Roxane.name);
console.log(Roxane.breed);