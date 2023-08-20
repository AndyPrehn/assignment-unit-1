console.log('hello world!');

// variables
// let is used to declare a variable
// firstName is the name of our variable
// 'Andy' is the value we assigned to our variable
let firstName = 'Andy';
console.log(firstName);

let lastName = 'Prehn';
console.log(lastName);

let fullName = firstName + " " + lastName;
console.log(fullName);

//firstName, lastName, and fullName are 
//all strings (text).

// variable set to the number 80
let temperature = 80;
console.log(temperature);

//boolean value type
let loggedIn = true;
//Console log with a string and value
console.log('loggedIn', loggedIn);

let isRaining = false;

//Conditional statement
// (should be either true or false)
if(loggedIn) {
    //if (true) will run this code
    console.log('Welcome', fullName);
} else {
    console.log('Welcome, Gueat!');
}

// && which is and
// || whic is or
// true && false will be false
// true && true will be true
// true || false will be true

// if the temperature is less than 85 
//and it's not (!) raining. Let's go 
//for a walk.
if (temperature <85 && !isRaining){
    console.log('Go for a walk!');
} else if(isRaining) {
    console.log('Bring an umbrella');
} else {
    console.log('Better to stay inside');
}

