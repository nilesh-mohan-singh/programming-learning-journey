// Arrays in JavaScript
// It is a collection of items in linear way.

// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Array length
console.log(fruits.length); // Output: 3

// Array indexes
// Indexing starts from 0
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[1]); // Output: "Banana"
console.log(fruits[2]); // Output: "Cherry"

// Modifying an array
fruits[1] = "Blueberry";
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// Accessing elements in an array
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[1]); // Output: "Banana"
console.log(fruits[2]); // Output: "Cherry"

// Looping through an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// "Apple"
// "Blueberry"
// "Cherry"

// For-of loop
for (let fruit of fruits) {
    console.log(fruit);
}
// Output:
// "Apple"
// "Blueberry"
// "Cherry"

// Array methods - push, pop, toString, Slice, Splice
// push - adds an element to the end of the array
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Date"]

// pop - removes the last element from the array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// toString - converts the array to a string
let fruitsString = fruits.toString();
console.log(fruitsString); // Output: "Apple,Blueberry,Cherry"

// slice - returns a shallow copy of a portion of an array into a new array object
let citrusFruits = fruits.slice(1, 3);
console.log(citrusFruits); // Output: ["Blueberry", "Cherry"]

// splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements
fruits.splice(1, 1, "Blackberry");
console.log(fruits); // Output: ["Apple", "Blackberry", "Cherry"]
