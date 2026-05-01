// What is Javascript?
// Setting up VS Code </>
// Our 1st Code in JS
console.log("Hello JS");

console.log("Welcome to Marketer Eye");
console.log("NM Singh");
console.log("I love Js");

// Variables in JS - These are containers for data to store values.
// Variable rules
// Naming Conventions - Camelcase, Lowerccase, Snakecase, Kebabcase, PascalCase, Uppercase
// Let, Const, Var
// {} - These curly braces are called block inside any programming language.



// ***************** DATA TYPES IN JS *****************
// Primitive Data Types - String, Number, Boolean, Null, Undefined, Symbol, BigInt
// Non-Primitive Data Types - Object, Array, Function

let price = -100;
let fullName = "NM Singh";
let isFollow = true;
let x;
let y = null;
let z = BigInt("1234567890123456789012345678901234567890");
let w = Symbol("Hello");

console.log(price);
console.log(fullName);
console.log(isFollow);

console.log(typeof price);
console.log(typeof fullName);
console.log(typeof isFollow);


let student = {
    name: "NM Singh",
    age: 20,
    marks: 80,
    isStudent: true
}

console.log(student.name); // Obj.key
console.log(student["name"]); //Obj.["key"]


