// const http = require('http');

// function requestListener(req, res) {
//     console.log(req);
// };

// http.createServer(function requestListener(req, res) {
//     console.log(req);
// });

// http.createServer(function(req, res) {
//     console.log(req);
// });

// http.createServer((req, res) => {
//     console.log(req);
// });


// const http = require('http');

// http.createServer((req, res) => {
//     console.log(req);
// });


// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req);
// });

// server.listen(3000);


const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`)
});

