// Simple Node.js server
const http = require('http');

// const server = http.createServer((req, res) => {
//     // console.log(req);
//     console.log(req.url, req.method, req.headers);
//     // process.exit(); // Stops event loop
// });


// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Complete Coding</title></head');
//     res.write('<body><h1>Like/Share/Subscribe</h1></body>');
//     res.write('</html>');
//     res.end();
// });

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);

//     if (req.url === '/') {
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Server Checking</title></head');
//         res.write('<body><h1>Connected Successfully</h1></body>');
//         res.write('<body><h1>Like/Share/Subscribe</h1></body>');
//         res.write('</html>');
//         res.end();
//     } else if (req.url === '/users'){
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Server Checking</title></head');
//         res.write('<body><h1>Hi Nilesh! How are you?</h1></body>');
//         res.write('</html>');
//         res.end();
//     } else if (req.url === '/products'){
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Server Checking</title></head');
//         res.write('<body><h1>Here is your Cricket Bat</h1></body>');
//         res.write('</html>');
//         res.end();
//     } else if (req.url === '/cart'){
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Server Checking</title></head');
//         res.write('<body><h1>Full Cricket Kit List </h1></body>');
//         res.write('<body><h1>Bat/Ball/Helmet/Shoe/Pad/Thigh/KitBag</h1></body>');
//         res.write('</html>');
//         res.end();
//     } else {
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Server Checking</title></head');
//         res.write('<body><h1>Sorry! You are at wrong page</h1></body>');
//         res.write('</html>');
//         res.end();
//     }
// });

// const server = http.createServer((req, res) => {
//     if (req.url === '/'){
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Complete Coding</title></head');
//         res.write('<body><h1>Welcome to my Home</h1></body>');
//         res.write('</html>');
//         res.end();
//     } else if (req.url === '/products') {
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Complete Coding</title></head');
//         res.write('<body><h1>Checkout our products </h1></body>');
//         res.write('</html>');
//         res.end();
//     }
//     // Error Understanding
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Complete Coding</title></head');
//     res.write('<body><h1>Like/Share/Subscribe</h1></body>');
//     res.write('</html>');
//     res.end();
// })


const server = http.createServer((req, res) => {
    console.log(req.url, req.methods, req.headers);

    if (req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head');
        res.write('<body><h1>Welcome to my Home</h1></body>');
        res.write('</html>');
        return res.end();
    } else if (req.url === '/products') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head');
        res.write('<body><h1>Checkout our products </h1></body>');
        res.write('</html>');
        return res.end();
    } else if (req.url === '/price') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head');
        res.write('<body><h1>Comfortable Price according to your budge </h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head');
    res.write('<body><h1>Like/Share/Subscribe</h1></body>');
    res.write('</html>');
    res.end();
})


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`)
});
