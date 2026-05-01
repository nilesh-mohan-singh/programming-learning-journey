// Arithmetic Operators :- +, -, *, /, %, **
// Unary Operators :- ++, --, -, typeof, void, delete
// Postfix and Prefix Increment/Decrement Operators :- a++, ++a, a--, --a
// Assignment Operators :- =, +=, -=, *=, /=, %=
// Comparison Operators :- ==, ===, !=, !==, >, <, >=, <=
// Logical Operators :- &&, ||, !
// Ternary Operator :- condition ? expression1 : expression2
// Bitwise Operators :- &, |, ^, ~, <<, >>, >>>

// Arithmetic Operators
console.log(5 + 3); // Addition
console.log(5 - 3); // Subtraction
console.log(5 * 3); // Multiplication
console.log(5 / 3); // Division
console.log(5 % 3); // Modulus
console.log(5 ** 3); // Exponentiation

// Unary Operators
let a = 5
console.log(a++); // Postfix increment: returns 5, then a becomes 6
console.log(++a); // Prefix increment: a becomes 7, then returns 7
console.log(a--); // Postfix decrement: returns 7, then a becomes 6
console.log(--a); // Prefix decrement: a becomes 5, then returns 5
console.log(-a); // Unary negation: returns -5

console.log(typeof a); // typeof operator: returns the type of a (number in this case)

// Assignment Operators
let b = 10
b += 5 // b = b + 5 
console.log(b);
b -= 5 // b = b - 5
console.log(b);
b *= 5 // b = b * 5
console.log(b);
b /= 5 // b = b / 5
console.log(b);
b %= 5 // b = b % 5
console.log(b);

// Comparison Operators
console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality)
console.log(5 != "5"); // false (loose inequality)
console.log(5 !== "5"); // true (strict inequality)
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 3); // true
console.log(5 <= 3); // false

// Logical Operators
let x = 10
let y = 20
console.log(x > 5 && y > 15); // true (both conditions are true)
console.log(x > 15 || y > 15); // true (at least one condition is true)
console.log(!(x > 5)); // false (negation of true)

// Ternary Operator
let age = 18
let canVote = age >= 18 ? "Yes" : "No"
console.log(canVote);

// Bitwise Operators - HOMEWORK
console.log(5 & 3); // 1 (bitwise AND)
console.log(5 | 3); // 7 (bitwise OR)
console.log(5 ^ 3); // 6 (bitwise XOR)
console.log(~5);    // -6 (bitwise NOT)
console.log(5 << 1); // 10 (left shift)
console.log(5 >> 1); // 2 (right shift)
console.log(5 >>> 1); // 2 (unsigned right shift)



// ************** CONDITIONAL STATEMENTS ***************

// if statement
let num = 10
if(num > 5){
    console.log("Number is greater than 5");
}

// if-else statement
if(num % 2 === 0){
    console.log("Number is even");
} else {
    console.log("Number is odd");
}

// if-else if-else statement
if(num > 0){
    console.log("Number is positive");
} else if(num < 0){
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

// switch statement - HOMEWORK
let day = "Monday"
switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Homework
// Bitwise Operator and Switch Statement
// Prompt and Alert too

let name = prompt("Enter your name: ");
alert("Hello, " + name + "!");
