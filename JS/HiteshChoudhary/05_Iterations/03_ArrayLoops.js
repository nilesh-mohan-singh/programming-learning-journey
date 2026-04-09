// for of

// ["", "", ""]
// [{}, {}, {}]

// for of loop syntax:
// for (const element of iterable) {
//     // code to be executed
// }


const arr = [1, 2, 3, 4, 5];

for (const num of arr){
    console.log(num);
}



const greetings = "Hello, World!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}




// Maps
const myMap = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('UK', "United Kingdom");
map.set('Fr', "France");

// console.log(map);

for (const [key, value] of myMap) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}


