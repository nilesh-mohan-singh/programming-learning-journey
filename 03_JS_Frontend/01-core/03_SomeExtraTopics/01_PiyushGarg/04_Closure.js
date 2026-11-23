// Closure
// Lexical Scoping & Lexical Environment
// Variables remembered + it's environment

// function main(){
//     const name = "Piyush Garg";

//     function sayMyName () {
//         console.log(name);
//     }

//     sayMyName;
// }



// function main(){
//     const name = "Piyush Garg";

//     function sayMyName () {
//         console.log(name);
//     }

//     return sayMyName;
// }

// let fn = main();

// fn();
// fn();
// fn();




// function main(name){
    
//     function sayMyName () {
//         console.log(name);
//     }

//     return sayMyName;
// }

// let consolePiyush = main("Piyush");

// consolePiyush();
// consolePiyush();
// consolePiyush();
// consolePiyush();

// console.log(consolePiyush);




// function adder(num){
//     function add(b){
//         console.log(num + b);
//     }
//     return add;
// }

// const addTo5 = adder(5);
// const addTo10 = adder(10);

// addTo5(2);
// addTo5(10); // Utility function

// addTo10(2);




// const myName = document.getElementById("my-name");
// const btn = document.getElementById("my-btn");

// function makeTextSizer(size){
//     function changeSize() {
//         myName.style.fontSize = `${size}px`;
//     }
//     return changeSize;
// }

// const size12 = makeTextSizer(12);
// const size20 = makeTextSizer(20);
// const size52 = makeTextSizer(52);
// const size5 = makeTextSizer(5);

// btn.addEventListener("click", size20);




const myName = document.getElementById("my-name");
const btn = document.getElementById("my-btn");

function makeCounter() {
    let count = 1;

    function increment(){
        console.log(count++);
    }

    return increment;
}

const counter1 = makeCounter();

counter1();
counter1();
counter1();
counter1();
