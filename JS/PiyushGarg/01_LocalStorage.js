// local storage & sessiin storage

// click on Inspect tab and go to application tab
// and you can see there a option of local storage.

// Every domain has it's own local storage.
// and you can't access cross domain local storage.

// what does that mean?
// you can only access the local storage of application which is built on your domain
// you can't access other domain local storage such as facebook's local storage



//Local Storage is always stored in the Key Value pair

// Example
// const button = document.getElementById('clickButton');
// const uname = document.getElementById('username');

// button.addEventListener('click', () => {
//     const value = uname.value;
//     console.log(value);
//     localStorage.setItem("name", value);
// });


// local storage value never get deleted until or unless we don't delete it.

// const button = document.getElementById('clickButton');
// const uname = document.getElementById('input-username');
// const username = document.getElementById('username');

// button.addEventListener('click', () => {
//     const value = uname.value;
//     console.log(value);
//     localStorage.setItem("name", value);
// });

// window.addEventListener('load', () => {
//     const value = localStorage.getItem('name');
//     username.innerText = value;
// })


const button = document.getElementById('clickButton');
const uname = document.getElementById('input-username');
const username = document.getElementById('username');

button.addEventListener('click', () => {
    const value = uname.value;
    console.log(value);
    localStorage.setItem("name", value);
    location.reload();
});

window.addEventListener('load', () => {
    const value = localStorage.getItem('name');
    username.innerText = value;
})

