//2 ways of object creation - literal & constructor
//singleton - if we built via constructor
//object.create()

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name:"Hitesh",
    "full name": "Hitesh Choudhary",
    mySym: "mykey1",
    [mySym]: "mykey1",
    age:18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser.mySym)
console.log(typeof JsUser.mySym)
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo);






