var CarState;
(function (CarState) {
    CarState[CarState["On"] = 0] = "On";
    CarState[CarState["Off"] = 1] = "Off";
})(CarState || (CarState = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus[TransactionStatus["Successful"] = 0] = "Successful";
    TransactionStatus[TransactionStatus["Failed"] = 1] = "Failed";
    TransactionStatus[TransactionStatus["Pending"] = 2] = "Pending";
})(TransactionStatus || (TransactionStatus = {}));
// you can also assign specific values to each enum member
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions["Sunny"] = "sunny";
    WeatherConditions["Rainny"] = "rainy";
    WeatherConditions["Cloudy"] = "cloudy";
    WeatherConditions["Snowy"] = "snowy";
})(WeatherConditions || (WeatherConditions = {}));
var transferStatus = TransactionStatus.Successful;
console.log(transferStatus);
console.log(WeatherConditions.Cloudy);
console.log(CarState);
// enums are just objects underneath.
