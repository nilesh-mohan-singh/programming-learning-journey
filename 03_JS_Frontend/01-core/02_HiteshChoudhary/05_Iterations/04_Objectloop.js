const myObject = {
    js: 'JavaScript',
    py: 'Python',
    java: 'Java',
    cpp: 'C++',
    rb: 'Ruby'
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


const myMap = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('UK', "United Kingdom");
map.set('Fr', "France");

for (const key in map){
    console.log(key);
}

