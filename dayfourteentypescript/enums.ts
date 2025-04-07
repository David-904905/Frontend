enum CarState
{
    On,
    Off,
}

enum TransactionStatus
{
    Successful,
    Failed,
    Pending,
}

// you can also assign specific values to each enum member

enum WeatherConditions
{
    Sunny = 'sunny',
    Rainny = 'rainy',
    Cloudy = 'cloudy',
    Snowy = 'snowy',
}

const transferStatus = TransactionStatus.Successful;
console.log(transferStatus);
console.log(WeatherConditions.Cloudy);
console.log(CarState);

// enums are just objects underneath.