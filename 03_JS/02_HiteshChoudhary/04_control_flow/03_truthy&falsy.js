
// const userEmail = "h@hitesh.ai"
// const userEmail = ""
const userEmail = []

if (userEmail) {
    console.log("Got user email")
} else {
    console.log("Don't have user email");
}


// falsey values
// false, 0, -0, 0n, "", null, undefined, NaN, BigInt

// truthy values 
// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// false == 0 // true
// false == '' // true
// 0 == '' // true





// Nullish Coalescing Operator (??) :- Null or Undefined (Full story is on these 2 keywords)

// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// var1 = undefined ?? 15;
// val1 = null ?? 10 ?? 20;

// console.log(val1); 





// Ternary Operator (?:) :- A shortcut for if-else statement

// condition ? expressionIfTrue : expressionIfFalse
// condition ? true : false - Hitesh Sir

// const iceTeaPrice = 100;
// iceTeaPrice <= 80 ? console.log("Ice tea is expensive") : console.log("Ice tea is cheap");
