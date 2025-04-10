var performOperation = function (value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(3));
    }
};
var myName = 'David';
performOperation(myName);
