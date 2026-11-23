function Piyush(){
    return Rehana();
}

function Rehana(){
    return Vedant();
}

function Vedant(){
    return Chirag();
}

function Chirag(){
    return Ajay();
}

function Ajay(){  
    // base case
    return true;
}

console.log(Piyush());




// function recursiveFunc(){
//     console.log("called")
//     recursiveFunc();
// }

// recursiveFunc();



// function recursiveFunc(){
//     if(true) return ""
//     recursiveFunc();
// }

// recursiveFunc();



// function goToLunch(){
//     if(person === 5) return true;
//     console.log(person);
//     return goToLunch(person + 1);
// }

// console.log("outcome", goToLunch(1));



// function multiply(arr){
//     let product = 1;
//     for (let i = 0; i < arr.length; i++) {
//         product *= arr[i];
//     }
//     return product;
// }

// console.log(multiply([1,2, 3, 4]));



function multiply(arr){
    console.log(arr);
    if(arr.length <= 0){
        return 1;
    } else return arr[arr.length - 1]* multiply(arr.slice(0, arr.length - 1));
}

console.log(multiply([1,2, 3, 4]));



// Factorial of n
// n = 5 => 5*4*3*2*1


// Range of Numbers
// Create an array with range of numbers
// Input: start = 1, end = 5, ------>>>>> Output:


// Given an integer x, return true if x is a palindrome, and false otherwise
// Input: x = 121        ------->>>>>       Output: true;


// Ques 4 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n -1) + F(n - 2), for n > 1
// Input: n = 3 ------>>>>> Output: 2


// Ques 5 - Reverse a String
// Input: "hello" ------->>>>>>> Output: "olleh"


// Ques 6 - Subsets ( Backtracking Algorithm using Recursion )
// Given a n integer array nums of unique elements, return all possibel subsets (the power set).
// the solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1, 2, 3]  ------->>>>>> Output: [[], [1], [2], [1, 2], [3], [1, 3], [2,3], [1, 2, 3]]
// Input: [0]     ----->>>>> Output: [[], [0]]
