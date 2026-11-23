//logic flow or control flow - condition based code working

//if

// if (condition){}

// if (true){
//     console.log("condition is true");
// }

// if (2==2){
//     console.log("condition is true");
// }

// 2 <= 2
// 3 != 2
// <, >, <=, >=, ==, !=, ===, !==

// const isUserLoggedIn = true;

// if (isUserLoggedIn){

// }

// if (3 != 2 ){
//     console.log("executed");
// }

// if ( 2 === "2"){
//     console.log("executed");
// }

// if ( 2 != 3 ){
//     console.log("executed");
// }


// const isUserLoggedIn = false;
// const temperature = 40;

// if (temperature < 50){
//     console.log("less than 50");
// }




// // if else
// if (temperature === 41){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute")




// const score = 200;

// if (score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }

// if (score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User Power: ${power}`); // ReferenceError: power is not defined
// // block scope - variables declared inside a block are not accessible outside the block

// if (score > 100){
//     var power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User Power: ${power}`); // fly
// // var is function scoped - variables declared with var are accessible outside the block
// // but it is not recommended to use var because it can lead to bugs and unexpected behavior
// // due to its function scope. 
// // It is better to use let or const for block scope.

// if (score > 100){
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User Power: ${power}`); // ReferenceError: power is not defined
// // let is block scoped - variables declared with let are not accessible outside the block





// // Shorthand notation - Not recommended to use in real code because it can lead to confusion and bugs
// const balance = 1000;

// if (balance > 500) console.log("test"); //implicit scope

// if (balance > 500) console.log("test"),
// console.log("test2"); //explicit scope - both statements will be executed regardless of the condition

// if (balance > 500) console.log("test"), console.log("test2"); // Very immature code not recommended



// // if else if else
// const balance = 1000;

// if (balance < 500){
//     console.log("balance is less than 500");
// } else if (balance < 750){
//     console.log("balance is less than 750");
// } else if (balance < 900) {
//     console.log("balance is less than 900");
// } else {
//     console.log("less than 1200");
// }



// // Nesting
// const userLoggedIn = true;
// const debitCard = true;

// if (userLoggedIn && debitCard){
//     console.log("Allow to buy course");
// }

// if (userLoggedIn && debitCard && 2==2){
//     console.log("Allow to buy course");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}

// conditional rendering - later

