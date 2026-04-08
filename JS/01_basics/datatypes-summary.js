// call by value & call by reference
// store in memory and how to access them

// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// dynamically typed or statically typed language

// Typescript - cousin of js


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol ('123')
const anotherId = Symbol('123')

console.log (id === anotherId);

const bigNumber = 34564058934059n


// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(scoreValue);
console.log(typeof myFunction);
