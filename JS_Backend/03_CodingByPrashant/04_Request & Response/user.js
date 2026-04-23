// Simple Node.js server
const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.methods, req.headers);

//     if (req.url === '/'){
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Complete Coding</title></head');
//         res.write('<body><h1>Fill the Required Details</h1>');
//         res.write('<form action ="/submit-details" method="POST">');
//         res.write('<input type ="text" name="username" placeholder ="Enter your name"><br>');
//         res.write('<label for="male">Male</label>');
//         res.write('<input type ="radio" id="male" name="gender" value="male" />');
//         res.write('<label for="female">Female</label>');
//         res.write('<input type ="radio" id="female" name="gender" value="female" />');
//         res.write('<br><input type="submit" value="Submit">');
//         res.write('</form>');
//         res.write('</body>');
//         res.write('</html>');
//         return res.end();
//     } else if (req.url === '/products') {
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Complete Coding</title></head');
//         res.write('<body><h1>Checkout our products </h1></body>');
//         res.write('</html>');
//         return res.end();
//     } else if (req.url === '/price') {
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Complete Coding</title></head');
//         res.write('<body><h1>Comfortable Price according to your budge </h1></body>');
//         res.write('</html>');
//         return res.end();
//     }
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
        res.write('<body><h1>Fill the Required Details</h1>');
        res.write('<form action ="/submit-details" method="POST">');
        res.write('<input type ="text" name="username" placeholder ="Enter your name"><br>');
        res.write('<label for="male">Male</label>');
        res.write('<input type ="radio" id="male" name="gender" value="male" />');
        res.write('<label for="female">Female</label>');
        res.write('<input type ="radio" id="female" name="gender" value="female" />');
        res.write('<br><input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</body>');
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
    } else if (req.url.toLocaleLowerCase() === "/submit-details" && req.method === "POST") {
        fs.writeFileSync('user.txt', 'Nilesh Mohan singh');
        res.statusCode = 302;
        res.setHeader('Location', '/');
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
