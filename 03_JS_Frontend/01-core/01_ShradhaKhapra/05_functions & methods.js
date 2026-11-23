// Function in Js
// Function Definition
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function Call
greet("Alice"); // Output: Hello, Alice!

// Function with Parameters
function add(a, b) {
    console.log(a + b);
}

// Function Call
add(5, 10); // Output: 15

// Function with Return Value
function sum(a, b) {
    return a + b;
}

// Function Call
sum(5, 10); // Output: 15

// Function Invocation
let result = sum(5, 10);
console.log(result); // Output: 15

// Function Expresssion
let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(5, 10)); // Output: 50

// Arrow Function
let divide = (a, b) => {
    return a / b;
};

console.log(divide(10, 5)); // Output: 2

// ForEach Loop in Array
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});

// Output:
// 1
// 2
// 3
// 4
// 5

// Using Arrow Function in ForEach Loop
numbers.forEach(number => console.log(number));

// Output:
// 1
// 2
// 3
// 4
// 5


// ForEach Loop in Array
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Output:
// Apple
// Banana
// Cherry

// Using Arrow Function in ForEach Loop
fruits.forEach(fruit => console.log(fruit));

// Output:
// Apple
// Banana
// Cherry


// Some More Array Methods - map, filter, reduce

// map - creates a new array with the results of calling a provided function on every element in the calling array
let allNumbers = [1, 2, 3, 4, 5];
let squaredNumbers = allNumbers.map(function(number) {
    return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// filter - creates a new array with all elements that pass the test implemented by the provided function
let evenNumbers = allNumbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// reduce - executes a reducer function on each element of the array, resulting in a single output value
let sumOfNumbers = allNumbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sumOfNumbers); // Output: 15
