
// function init(){
//     let name = "Mozilla";
//     function displayName(){
//         console.log(name);
//     }
//     displayName();
// }
// init();


// function outer(){
//     let username = "hitesh"
//     function inner(){
//         console.log("inner", username);
//     }
//     inner()
// }
// outer()
// console.log("TOO OUTER", username);




// function outer(){
//     let username = "hitesh"
//     function inner(){
//         console.log("inner", username);
//     }
//     function innerTwo(){
//         console.log("innerTwo", username);
//     }
//     inner()
//     innerTwo()
// }
// outer()
// console.log("TOO OUTER", username);


// function outer(){
//     let username = "hitesh"
//     console.log("OUTER", secret);
//     function inner(){
//         let secret = "my123"
//         console.log("inner", username);
//     }
//     function innerTwo(){
//         console.log("innerTwo", username);
//         console.log(secret);
//     }
//     inner()
//     innerTwo()
// }
// outer()
// console.log("TOO OUTER", username);




// function makeFunc(){
//     const name = "Mozilla";
//     function displayName(){
//         console.log(name);
//     }
//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();




// document.getElementById("orange").onclick = function(){
//     document.body.style.backgroundColor = "orange";
// }
// document.getElementById("green").onclick = function(){
//     document.body.style.backgroundColor = "green";
// }

// DRY Principle - Don't Repeat Yourself

function clickHandler(color){
    // document.body.style.backgroundColor = `${color}`;

    return function (){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = clickHandler("Orange")
document.getElementById('green').onclick = clickHandler("Green")

// function vs reference of function
