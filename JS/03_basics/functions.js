
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


