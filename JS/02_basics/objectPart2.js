// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUsre = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUsre.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} // spread operator
console.log(obj3);

const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnPropertyy('isLogged'))
console.log(tinderUser.hasOwnPropertyy('isLoggedIn'))


// Object Destructuring

const course = {
    coursename: "js in hindi", 
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// concept used in React
/* const navbar = ({company}) => {

}

navbar(company = "hitesh")  */

// destructure doesn't happen only of object, but also of arrays.


// JSON syntax understanding
// {
//     "name":"hitesh", 
//     "coursename":"js in hindi",
//     "price":"free"
// }

// API sometimes comes in the array format
// [
//     {},
//     {},
//     {}
// ]


// API -> random user me api
// Json formatter - tool to understand json data, even you can create one yourself.
