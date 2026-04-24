const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
})

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}
    `)
});


// Important Concepts to clear
/*
npm run
npm install

utility
dependency

*/