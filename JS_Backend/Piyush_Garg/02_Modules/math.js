function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// module.exports = {} // Nothing is here in its exports
// module.exports = "Piyush"; //Let's we write "Piyush" in it's exports
// now maths value will be Piyush inside console.log(math) in modules.js file

// module.exports = add;
// module.exports = sub; // it is overriding the value

// so you can use JS objects to return multiple things

// module.exports = {
//     add,
//     sub,
// }

// module.exports = {
//     addFn: add,
//     subFn: sub,
// }


// Those are default exports methods. Now we'll learn through export objects

// exports.add = (a, b) => a + b; // This is an anonymous function (function without name)
// exports.sub = (a, b) => a - b; // This is an anonymous function (function without name)

// Technically we have said add & sub, but those are properties, we can say that
// exports.add1 = (a, b) => a + b;
// exports.sub2 = (a, b) => a - b;



// so we have 2 ways to export:
// module.exports - but you can use it only 1 times, because it overrides the value
// exports - you can use as many times as you want

// Which is preferred - it's depends on the use case
// if code is keep running, use exports.value
// but i prefer module.exports, I keep creating functions upside and finally export inside module.export

// so this is the way to export your functions and using require(), you can import them.



// Similarly I have told you that Node Js has many built in package or built in modules.
// So you can use them too.

