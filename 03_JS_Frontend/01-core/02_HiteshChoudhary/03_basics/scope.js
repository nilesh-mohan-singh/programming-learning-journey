// let a = 10
// const b = 20
// var c = 30

// var c = 300

// if (true){
//     let a = 10
//     const b = 20
//     var c = 30
//     c = 300
// }

// console.log(a);
// console.log(b);
// console.log(c);


if (true){
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

console.log(a)



// scope level and mini hoisting

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website)
}

// console.log(username)


// +++++++++++++++++ Interesting ++++++++++++++++++++

console.log(addone (5));

function addone (num){
    return num + 1
}


console.log(addone (5));

const addTwo = function(num){
    return num + 2
}



