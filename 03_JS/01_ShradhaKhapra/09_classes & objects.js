// Whenever we'll be building any project inside JS, so inside that project, which concepts and technology we'll be using, it'll totally depends upon which type of project we are building. For Example, we use a lot of classes and objects in those projects where it needed a lot and on the other hand, in some projects there is no need of classes & objects, we will not be using theere, but Interview point of view, if you go to give interview as a Web-Developer, Front-end Developer, there they can ask about Clases, Objects, Proottypes, etc types of questions.that's why this chapter is important.

// We'll see some new keywords related to JS programming in this chapter.


// Prototypes in JS
// A javaScript object is an entity having state and behaviour (properties and method).
// JS objects have a special property called prototype. We can set prottype using __proto__.
// *If object & prottype have some method, object's method will be used.

// In each and every object inside JS, there is a special property which is prototype and Prototype is in itself an object formed then those properties and methods come by inherited and that's why we use to get prototype in any JS object.



// const student = {
//     fullName: "shradha khapra",
//     marks: 94.4,
//     printMarks: function() {
//         console.log("marks = ", marks);
//     }
// };

const student = {
    fullName: "shradha khapra",
    marks: 94.4,
    printMarks: function() {
        console.log("marks = ", this.marks); //student.marks
    }
};



// const employee = {
//     calcTax1() {
//         console.log("tax rate is 10%")
//     },
//     // calctax2: function() {
//     //     console.log("tax rate is 10%")
//     // }
// }

// // const karanArjun = {
// //     salary: 50000
// // }

// // karanArjun.__proto__ = employee;


// const karanArjun = {
//     salary: 50000
// }

// const karanArjun1 = {
//     salary: 50000
// }
// const karanArjun2 = {
//     salary: 50000
// }
// const karanArjun3 = {
//     salary: 50000
// }
// const karanArjun4 = {
//     salary: 50000
// }

// karanArjun.__proto__ = employee;
// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;




const employee = {
    calcTax1() {
        console.log("tax rate is 10%")
    },
}

const karanArjun = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%")
    }
}

karanArjun.__proto__ = employee;




// Classes in JS
// Class is a program-code template for creating objects. Those objects will have some state (variable) & some behaviour (functions) inside it.

class myClass {
    constructor() {}
    myMethod() {}
}
let myObj  = new myClass();

// We have already watched a way to create objects, now one more way there to create object which is through classes.
// When we have to create similar objects in bulk, then we create them through classes and Classes basically gives a template to build object so it's like a blueprint.
// Inside class, we should not need to separate 2 different functions with "commas"

// Example
class ToyotaCar {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}
let fortuner = new ToyotaCar();
let lexus = new ToyotaCar();


// Constructor() method is:
    // automatically invoked by new
    // initializes object

class myClass {
    constructor() {}
    myMethod () {}
}

// Constructor is a special method inside class because "Constructor" is a reserve keyword, it's name is only "constructor" inside JS.
// If we don't create "constructor" inside classes, then JS automatically create the "constructor" inside class
// Constructor is a method but it's name is "constructor".




// Inheritance in JS
// Inheritance is passing down properties & methods from parent class to child class.

class Parent {

}
class Child extends Parent {

}
// *If child & parent have same method, child's method will be used. [Method Overriding]


// Inheritance is also in other programming language like Java, C++, when you will read Objects and classes there.

// E.g - class 1 -> p1, p1, m1(), m2()
// class 2




// Super Keyword
// The super keyword is used to call the constructor of its parent calss to access the parent's properties and methods.

super (args) // calls Parent's constructor
super.parentMethod(args)

// Sometimes, we get the condition, where we have to access directly the "parent's" class properties or methods from "child's" class or to call the parent's constructor, then we use the "super" keyword.





// Error Handling - try-catch
// It's not the topic related to classes & objects, it's a different topic.

try{

} catch(err){

}

// After coming error, the rest of the code in JS stop working, so if there any doubt in your mind that in a particular line of code, there might be the chance of coming error, then we use "try-catch" in JS to handle the error, so after using this let's suppose there will be error in a particular line even though rest of the coede will work properly.
