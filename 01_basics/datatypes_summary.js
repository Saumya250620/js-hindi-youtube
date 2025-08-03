// Primitive - call by value

// 7 types: String, Number, Boolean, Null, undefined, Symbol,
// BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n // bigInt
 


// Reference (Non- Primitive)

// Array, Objects, Functions

const heros = ['shaktiman', 'naagraj', 'doga']; // Array
let myobj= {
    name: "hitesh",
    age: 22,
}  // object

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);  // "object function" in documentation

// Typeof Operator result

// |------------|-------------|
// |Type of val | Result      |
// |------------|-------------|
// |Undefined   |"undefined"  |
// |Null        |"object"     |
// |Boolean     |"boolean"    |
// |Number      |"number"     |
// |String      |"string"     |
// |------------|-------------|


// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)(Copy hota h ), Heap(Non-Primitive)(Refence jata h)

let myYoutubename = "hiteshchoudharydotcom"

let anotherName = myYoutubename;
anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
