// Fetch API
// The Fetch API provides an interface for fetching (sending/recieving) resources.
// IT uses Request and Response objects.
// The fetch () method is used to fetch a resource (data).

// Syntax
// let promise = fetch(URL.[options]);

// Example of Fetch Method
// const URL = "https:// cat-fact.herokuapp.com/facts";

// let promise = fetch(URL)
// console.log(promise);

// const getFacts = async() => {
//     console.log("getting data ...");
//     let response = await fetch (URL);
//     console.log(response);
// };

// Understanding Terms
// AJAX - Asynchronous JS & XML
// JSON - Javascript Object Notation
// json() method - returns a second promise that resolves with the result of parsing the response
// of body text as JSON. (Input is JSON, output is JS object)

// const URL = "https:// cat-fact.herokuapp.com/facts";

// const getFacts = async() => {
//     console.log("getting data ...");
//     let response = await fetch (URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[0].text);
// };


// const URL = "https:// cat-fact.herokuapp.com/facts";
// const factPara = document.querySelector("fact");
// const btn = document.querySelector("btn");

// const getFacts = async() => {
//     console.log("getting data ...");
//     let response = await fetch (URL);
//     console.log(response);
//     let data = await response.json();
//     factPara.innerText = data[2].text;
// };

// btn.addEventListener("click", getFacts);


const URL = "https:// cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("fact");
const btn = document.querySelector("btn");

function getFacts(){
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        factPara.innerText = data[2].text;
    });
};

btn.addEventListener("click", getFacts);



// Homework - Read about these topics 
// Requests & Response
// HTTP Verbs
// Response Status Codes
