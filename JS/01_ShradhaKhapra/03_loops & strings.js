// Loops in JavaScript
// Loops are used to execute a piece of code again and again until a certain condition is met.
// There are three types of loops in JavaScript:
// 1. For Loop
// 2. While Loop
// 3. Do-While Loop
// Loops are used to iterate over arrays, objects, and other data structures.
// Loops are also used to perform repetitive tasks without having to write the same code multiple times.
// 4. For...of Loop - used to iterate over the values of an iterable object (like arrays, strings, etc.)
// 5. For...in Loop - used to iterate over the properties of an object.
// Iterable Objects means objects that can be iterated over, such as arrays, strings, maps, sets, etc. 
// total iterable objects in JS - 6 (array, string, map, set, arguments, nodeList)

// Syntax Breakdown:
// For Loop:
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }

// While Loop:
// while (condition) {
//     // code to be executed
// }

// Do-While Loop:
// do {
//     // code to be executed
// } while (condition);

// For...of Loop:
// for (let variable of iterable) {
//     // code to be executed
// }

// For...in Loop:
// for (let key in object) {
//     // code to be executed
// }


// For Loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

// While Loop
let j = 0;
while (j < 5) {
    console.log("Iteration number: " + j);
    j++;
}

// Do-While Loop
let k = 0;
do {
    console.log("Iteration number: " + k);
    k++;
} while (k < 5);

// For...of Loop
const myArray = [10, 20, 30, 40, 50];

for (let value of myArray) {
    console.log(value);
}

// String Iteration using For...of Loop
const myString = "Hello";

for (let char of myString) {
    console.log(char);
}

// For...in Loop
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}



// ******************** STRINGS IN JAVASCRIPT ********************
// String is a sequence of characters used to represent text.
// String can be created using single quotes, double quotes, or backticks.

// Create String
const str1 = 'Hello';
const str2 = "World";
const str3 = `Hello World`;

// String Length
console.log(str1.length); // 5
console.log(str2.length); // 5
console.log(str3.length); // 11

// String Indexing
// String indices start from 0. The first character of the string is at index 0, the second character is at index 1, and so on.

// String Indices
console.log(str1[0]); // H
console.log(str1[1]); // e
console.log(str1[2]); // l
console.log(str1[3]); // l
console.log(str1[4]); // o

// Template Literals in Js
// String Interpolation
// Escape Characters
const name = "Alice";
const greeting = `Hello, ${name}!`; // Hello, Alice!
console.log(greeting);

// String Concatenation - the process of joining two or more strings together to form a new string.
const str4 = str1 + " " + str2; // Hello World
console.log(str4);




// String Methods in JavaScript
// 1.toUpperCase() - converts a string to uppercase letters
// 2.toLowerCase() - converts a string to lowercase letters
// 3.trim() - removes whitespace from both ends of a string
// 4.slice() - extracts a section of a string and returns it as a new string
// 5.concat() - concatenates two or more strings and returns a new string
// 6.replace() - replaces a specified value with another value in a string
// 7.charAt() - returns the character at a specified index in a string

// 1. toUpperCase() - converts a string to uppercase letters.
console.log(str1.toUpperCase()); // HELLO

// 2. toLowerCase() - converts a string to lowercase letters.
console.log(str2.toLowerCase()); // world

// 3. trim() - removes whitespace from both ends of a string.
const str6 = "   Hello World   ";
console.log(str6.trim()); // Hello World

// 4. slice() - extracts a section of a string and returns it as a new string.
console.log(str3.slice(0, 5)); // Hello
console.log(str3.slice(6)); // World

// 5. concat() - concatenates two or more strings and returns a new string.
const str7 = str1.concat(" ", str2); // Hello World
console.log(str7);

// 6. replace() - replaces a specified value with another value in a string.
console.log(str3.replace("World", "Everyone")); // Hello Everyone

// 7. charAt() - returns the character at a specified index in a string.
console.log(str3.charAt(0)); // H
console.log(str3.charAt(6)); // W






// Homework - Explore Strings
// // 1. toUpperCase() - converts a string to uppercase letters.
// console.log(str1.toUpperCase()); // HELLO

// // 2. toLowerCase() - converts a string to lowercase letters.
// console.log(str2.toLowerCase()); // world

// // 3. indexOf() - returns the index of the first occurrence of a specified value in a string.
// console.log(str3.indexOf("World")); // 6

// // 4. slice() - extracts a section of a string and returns it as a new string.
// console.log(str3.slice(0, 5)); // Hello
// console.log(str3.slice(6)); // World

// // 5. substring() - returns a part of the string between the start and end indices.
// console.log(str3.substring(0, 5)); // Hello
// console.log(str3.substring(6)); // World

// // 6. replace() - replaces a specified value with another value in a string.
// console.log(str3.replace("World", "Everyone")); // Hello Everyone

// // 7. split() - splits a string into an array of substrings based on a specified separator.
// const str5 = "Hello,World,JavaScript";
// const arr = str5.split(","); // ["Hello", "World", "JavaScript"]
// console.log(arr);

// // 8. trim() - removes whitespace from both ends of a string.
// const str6 = "   Hello World   ";
// console.log(str6.trim()); // Hello World

// // 9. includes() - determines whether a string contains a specified value.
// console.log(str3.includes("Hello")); // true
// console.log(str3.includes("Everyone")); // false

// // 10. startsWith() - determines whether a string starts with a specified value.
// console.log(str3.startsWith("Hello")); // true
// console.log(str3.startsWith("World")); // false

// // 11. endsWith() - determines whether a string ends with a specified value.
// console.log(str3.endsWith("World")); // true
// console.log(str3.endsWith("Hello")); // false

// // 12. charAt() - returns the character at a specified index in a string.
// console.log(str3.charAt(0)); // H
// console.log(str3.charAt(6)); // W

// // 13. charCodeAt() - returns the Unicode of the character at a specified index in a string.
// console.log(str3.charCodeAt(0)); // 72 (Unicode for 'H')
// console.log(str3.charCodeAt(6)); // 87 (Unicode for 'W')

// // 14. repeat() - constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
// console.log(str1.repeat(3)); // HelloHelloHello

// // 15. padStart() - pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
// console.log(str1.padStart(10, "*")); // *****Hello

// // 16. padEnd() - pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the end of the current string.
// console.log(str1.padEnd(10, "*")); // Hello*****

// // 17. toString() - returns a string representing the specified object.
// const num = 123;
// console.log(num.toString()); // "123"

// // 18. valueOf() - returns the primitive value of a String object.
// const strObj = new String("Hello");
// console.log(strObj.valueOf()); // "Hello"

// // 19. localeCompare() - returns a number indicating whether a reference string comes before, after, or is the same as the given string in sort order.
// console.log(str1.localeCompare(str2)); // -1 (str1 comes before str2)
// console.log(str2.localeCompare(str1)); // 1 (str2 comes after str1)
// console.log(str1.localeCompare("Hello")); // 0 (str1 is the same as "Hello")

// // 20. match() - retrieves the matches when matching a string against a regular expression.
// const str7 = "The rain in Spain stays mainly in the plain.";
// const regex = /ain/g;
// console.log(str7.match(regex)); // ["ain", "ain", "ain"]

// // 21. search() - executes a search for a match between a regular expression and this String object.
// console.log(str7.search(/Spain/)); // 12 (index of "Spain")
// console.log(str7.search(/France/)); // -1 (not found)

// // 22. replaceAll() - returns a new string with all matches of a pattern replaced by a replacement.
// console.log(str7.replaceAll("ain", "XXX")); // The rXXX in SpXXX stays mXXXly in the plXXX.

// // 23. toLocaleLowerCase() - returns the calling string value converted to lower case, according to any locale-specific case mappings.
// console.log(str1.toLocaleLowerCase()); // hello

// // 24. toLocaleUpperCase() - returns the calling string value converted to upper case, according to any locale-specific case mappings.
// console.log(str2.toLocaleUpperCase()); // WORLD

// // 25. toLocaleString() - returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.
// console.log(str3.toLocaleString()); // Hello World

