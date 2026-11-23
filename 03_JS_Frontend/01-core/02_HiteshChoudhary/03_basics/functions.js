
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("e");
    console.log("S");
    console.log("H");
}

//sayMyName()

/*
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers(3, "4")
addTwoNumbers(3, "a")
addTwoNumbers(3, null)

// nomenclature - parameters & arguments 


const result = addTwoNumbers(3, 5)

console.log("Result: ", result);
*/

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

/*
function loginUserMessage(username){
    return `${username} just logged in`
}

// loginUserMessage("hitesh")
// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())
*/

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())


function loginUserMessage(username = "sam"){  // default parameter
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
console.log(loginUserMessage("hitesh"))


// function part 2

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500))


// function calculateCartPrice(...num1){ // Rest operator(...)
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue[200, 400, 500, 1000]);
