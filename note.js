// dont rush to speak, listen first, think clearly before making an asumption

// class are declared using the class keyword
// The constructor is where you initialize properties of the class.
// the this keyword is used to refer to the current object.  Depending on where this is used, what it references changes.
// In the case of a class, it refers to the instance of the object being constructed.

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

}

// in javascript when you try to access the property of an object or array that does not exists, undefined is returned, this can lead to 
// errors when performing calculations such as NaN

// to fix this, always use the logical OR operator to provide a fallback value for the operation

// the new keyword is used when instantiating an object.

let scores = {}; 
  let players = ["Alice", "Bob", "Charlie"];

  players.forEach(player => {
    scores[player] = scores[player] || 0;
  });


// Because of the way computers store and work with numbers, calculations involving decimal numbers can result in some strange behaviour.
// e.g 0.1 + 0.2 is not equal to 0.3. This is because computers store decimal numbers as binary fractions, and some binary fractions cannot be represented exactly as decimal fractions.

// You can use the .toFixed() method to round a number to a certain amount of decimal places.

// browsers have a built-in confirm function which displays a confirmation prompt to the user. The confirm accepts a string which is the message displayed to the user. It returns true if the user confirms, and false if the user cancels.

// 