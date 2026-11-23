// Recursion from Learn Coding
// a function keep calling itself till it provide the desired output.

// function name(){
//     name()
// }
// name()

// function recursion(){
//     console.log("this is a recursive a function");
//     recursive();
// };
// recursive()

// base condition

/*
function -> function -> function -> function -> function
This function keep repeating till the base condition hit and then it will start bringing output
once it hit the base condition and keep repeating the answers.
*/


function coding(num){
    if (num === 0) {
        console.log("coding has been done!");
        return
    } else {
        console.log("I'm doing coding")
        coding(num - 1)
    }
}
coding(5);


// Iteration or Recursion are almost same
// Loop and Recursion are almost same
// Recursion is used most of the time for solving bigger problems


// factorial => 5! -> 5*4*3*2*1 = 120/ 5*4!/ 4*3!
// n! = n*n-1*n-2*n-3.....1 / n*(n-1)

function factorial(n){
    if(n === 1){
        return 1
    }
    let fact = n*factorial(n-1)
    return fact
}

/*
5*4!
4*3!
3*2!
2*1!
*/

// console.log(factorial(3))
console.log(factorial(5))

