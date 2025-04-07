let user: readonly [string, number, boolean];

user = ['peter', 25, true];



// It is a good practice to make your tuples read only so as to avoid modifying your tuple.
let [username, age, is_employed] = user;
console.log(username);
console.log(age);
console.log(is_employed);

