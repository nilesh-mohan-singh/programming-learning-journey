// ctrl + click on the link file name - it will automatically create a new file with that name
// alert("ok"); // to check whether it is working perfectly or not

// function showTime(){
//     const currentTime = new Date();
//     console.log(currentTime);
// }

// showTime();



// function showTime(){
//     const currentTime = new Date();
//     const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
//     console.log(time);
// }

// showTime();



// function showTime(){
//     const currentTime = new Date();
//     const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
//     document.getElementById('time').innerText = time;
//     console.log(time);
// }

// showTime();

function showTime(){
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    document.getElementById('time').innerText = time;
}

// setTimeout(() => console.log("hi"), 5000);
// setInterval(() => console.log("hi"), 5000);

setInterval(showTime, 1000);



// Stop timer
const button = document.getElementById('stop-button');

function showTime(){
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    document.getElementById('time').innerText = time;
}

setInterval(showTime, 1000);

button.addEventListener('click', () => {
    clearInterval(interval);
});


// Homework Task
// Create a stopwatch timer according to the user chosen time choice
// Hint: you'll use setInterval
// Or you can create a alarm clock type project too
