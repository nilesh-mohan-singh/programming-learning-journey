// Asynchronous JS
// Callback -> Callback Hell -> Promise -> Promise Chain -> Async Await

// React - after JS
// Vite - Build Tools
// Digital Ocean, Hostinger, AWS

function hello() {
    console.log("hello");
}

setTimeout(hello, 4000);


setTimeout (() => {
    console.log("hello");
})


console.log("one");
console.log("two");
setTimeout (() => {
    console.log("hello");
})
console.log("three");
console.log("four");



// Callbacks
// A callback is a function passed as an argument to another function.

function sum (a, b) {
    console.log(a + b);
}

function calculator (a, b, callback) {
    sumCallback(a, b);
}

calculator (1, 2, sum);



function sum (a, b){
    console.log(a + b);
}

function calculator (a, b, sumCallback) {
    sumCallback(a, b);
}

calculator (1, 2, (a, b) => {
    console.log(a + b);
});




const hello = () => {
    console.log("hello");
}

setTimeout(hello, 3000);





// Callback Hell - Nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of Doom)

// This style of programming becomes difficult to understand and manage.

// Nesting of Callbacks
// When callback nesting goes to very deeper level, it might increase the chance of Callback Hell problem.

function getData(dataId){
    console.log("data", dataId);
}

getData(1);
getData(123);
getData(1);



function getData(dataId){
    setTimeout (() => {
        console.log("data", dataId);
    })
}

getData(1);
getData(2);
getData(3);


function getData(dataId, getNextData){
    setTimeout (() => {
        console.log("data", dataId);
        getNextData();
    }, 2000);
}

getData(1, getData(2));



getData(1, () => {
    getData(2);
})




function getData(dataId, getNextData){
    setTimeout (() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    getData(2);
})

getData(1, () => {
    getData(2, () => {
        getData(3);
    });
});

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});


getData(1, () => {
    console.log("getting data 2...");
    getData(2, () => {
        console.log("getting data 3...");
        getData(3, () => {
            console.log("getting data 4...");
            getData(4);
        });
    });
});





// Promises
// Promise Syntax
// let promise = new Promise ((resolve, reject) => {})
// resolve & reject are callbacks provided by JS automatically.

// let promise = new Promise ((resolve, reject) => {
//     console.log("I am a promise");
//     resolve(123);
// });

// let promise = new Promise ((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
// });



// let promise = new Promise ((resolve, reject) => {
//     console.log("I am a promise");
//     reject ("same error occurred");
// });

// function getData(dataId, getNextData) {
//     return new Promise ((resolve, reject) => {

//     })
// }

// function getData(dataId, getNextData) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve ("success");
//             if (getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// };



// In the console - explore around these
// let result = getData(123)
// result



// Handling Promises
// promise.then((res) => {...})
// promise.catch((err) => {...})
// "Res" & "err" are the parameters which comes automaticallyy in "Promise.then" & "Promise.catch"

//Example
const getPromise = () => {
    return new Promise ((resolve, reject) => {
        console.log("I am a promise");
        resolve ("success");
    });
};



let promise = getPromise();
promise.then(() => {
    console.log("promise fulfilled");
})

promise.catch(() => {
    console.log("rejected");
})

promise.then((res) => {
    console.log("promise fulfilled", res);
});

promise.catch((err) => {
    console.log("rejected", err);
});




// Let's move towards learning Promise Chain
function asyncFunc(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data 1");
            resolve("success");
        }, 4000);
    });
};

// console.log("fetching data 1...")
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res);
// })


function asyncFunc1(){
    return new Promise ((resolve, reject) => {
        setTimeOut (() => {
            console.log("data 1");
            resolve ("success");
        });
    });
};


function asyncFunc2(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve ("success");
        });
    });
};

// console.log("fetching data 1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// });

console.log("fetching data 2...");
let p2 = asyncFunc2();
p2.then((res) => {
    console.log(res);
});




// For fetching data2 after getting/fetching data 1, we'll use Promise chaining
function asyncFunc1(){
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            console.log("data 1");
            resolve ("success");
        }, 4000);
    });
};

function asyncFunc2(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data 2");
            resolve ("success");
        }, 4000);
    });
};

// console.log("fetching data 1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data 2...");
//     let p2 = asyncFunc2();
//     p2.then((res) => {});
// });

// shortening the same code
console.log("fetching data 1...");
asyncFunc1().then((res) => {
    console.log("fetching data 2...");
    asyncFunc2().then((res) => {});
});




// Bringing back the same Callback code to practice here
function getData(dataId, getNextData) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve ("success");
            if (getNextData){
                getNextData();
            }
        }, 5000);
    });
};

let p1 = getData(1);
p1.then((res) => {
    console.log(res);
});

// shortening the code

getData(1).then((res) => {
    console.log(res);
});


getData(1).then((res) => {
    console.log(res);
    getData(2).then(() => {
        console.log(res);
    });
});

// or better way
getData(1).then((res) => {
    return getData(2);
}).then((res) => {
    console.log(res);
});

// automatically structured in this way
getData(1)
    .then((res) => {
        return getData(2);
})
    .then((res) => {
        console.log(res);
});



getData(1).then((res) => {
    return getData(2);
}).then ((res) => {
    return getData(3);
}).then ((res) => {
    console.log(res);
});



// Async Await
// Async function always return a promise
// Async function syntax
// async function myFunc(){}
// await pauses the execution of its surrounding async function until the promise is settled.

// we can create any normal function to async function
// Example:

// async function hello(){
//     console.log("hello");
// }
// hello();

// Asynd - Await Example Understanding
// function api (){
//     return new Promise ((resolve, reject) => {
//         console.log("weather data");
//         resolve (200);
//     });
// }

function api(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
            reslove (200);
        }, 2000);
    });
}

async function getWeatherData(){
    await api();
}

getWeatherData();



async function getWeatherData (){
    await api();
    await api();
}


function getData (dataId) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
};

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}


async function getAllData(){
    console.log("getting data1 ...");
    await getData(1);
    console.log("getting data2 ...");
    await getData(2);
    console.log("getting data3 ...");
    await getData(3);
        console.log("getting data4 ...");
    await getData(4);
    console.log("getting data5 ...");
    await getData(5);
}




// when we use .then & .catch, we don't use async-await & its vice versa.
// async await - we use it maximum time in general programming.
// while using it, we always have to put the code in function and then we have to call that function.


//IIFE: Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined.

// (function(){
//     //...
// })();
// (() => {
//    //... 
// })();
// (async() => {
//     //...
// })();

// Example of IIFE
(async function(){
    console.log("getting data 1 ...");
    await getData(1);
    console.log("getting data 2 ...");
    await getData(2);
    console.log("getting data 3 ...");
    await getData(3);
})();



// My observation is this about IIFE Syntax:
// (function (){
// })();

