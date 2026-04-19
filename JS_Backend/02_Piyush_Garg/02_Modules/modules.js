// function add(a, b) {
//     return a + b;
// }

// console.log(add(2,5));

// const math = require('buffer') //require - built in function, buffer - built in package
// const math = require('math.js') // It will throw error - Module not found
// const math = require('math') // It will throw error - module not found

// It throw error, because it will start searching inside built in package or installed packages.
// But we have to search that inside our own directory. // That's why we write ./ - './math.js'

// const math = require('./math.js') // now it will not throw error

// Even you can destructure it
// const { add, sub } = require("./math.js");

// console.log(add(2,5)); // add function is not defined
// math.js - it is like a custom library or custom module

// console.log(math); // returns an empty object, we need a function there, so where that function goes


// console.log(math(2, 3));
// console.log("Math Value is", math(2,3));
// console.log("Math Value is", math);

// console.log("Math Value is", math.addFn(2, 4));
// console.log("Math Value is", math.subFn(2, 4));


// console.log("Math Value is", math.add(2, 4));
// console.log("Math Value is", math.sub(2, 4));


// Now after destructuring, we can directly use add & sub function
// console.log("Math Value is", add(2, 4));
// console.log("Math Value is", sub(2, 4));


// require built in function is only available in Node JS
// console.log("Math Value is", math);







// Similarly I have told you that Node Js has many built in package or built in modules.
// So you can use them too.

// const math = require("http");// with using this package we can create our web servers.
// const math = require("fs");// with using this we can do file handling
// file system module which we'll see in next video



// So, what exactly happens in require function - require()
// if you give some package name as it is, then it search in it's node directory.
// means where it's all packages are stored or staying.

// and if you give ./ then it will search inside the current directory.
// and if you run ./fs it will give you an error because you don't have any fs module in current directory
// const math = require("./fs");

// but if you run "fs", you will see that you'll get lot of functions & many things
// that you can use.





// so I think you'll get the clarity of modules.
// what are modules and how modular programming is done in node js



// till now we haven't installed any external package
// "http", "fs", etc these are built in packages
// they are already there, when we have installed node JS.


// similary you have one more built in package "crypto"
// const math = require("crypto");
// it is used in cryptography
// means if you have to use hashing, generating shots, encryption, decryption, etc
// then it is used theres



// So this is a quick video on modules
// and I think that you should have understood modules very well.



