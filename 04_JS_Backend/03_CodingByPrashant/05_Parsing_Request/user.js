const fs = require('fs');
const { request } = require('http');

const userRequestHandler = (req, res) => {
    console.log(req.url, req.method);

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
    } else if (req.url.toLocaleLowerCase() === "/submit-details" && req.method === "POST") {
        
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
            const params = new URLSearchParams(fullBody);
            const bodyObject = Object.fromEntries(params)
            console.log(bodyObject);
            fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
        })
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head');
    res.write('<body><h1>Like/Share/Subscribe</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = userRequestHandler;


// Same work without Modules
// // Simple Node.js server
// const http = require('http');
// const fs = require('fs');
// const { brotliDecompressSync } = require('zlib');

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
//     } else if (req.url.toLocaleLowerCase() === "/submit-details" && req.method === "POST") {
//         // //
//         // req.on('data', chunk => {
//         //     console.log(chunk);
//         // })
//         // //
        
//         const body = [];
//         req.on('data', chunk => {
//             console.log(chunk);
//             body.push(chunk);
//         });

//         // req.on('end', () => {
//         //     const fullBody = Buffer.concat(body).toString();
//         //     console.log(fullBody);
//         // })

//         req.on('end', () => {
//             const fullBody = Buffer.concat(body).toString();
//             console.log(fullBody);
//             const params = new URLSearchParams(fullBody);
            
//             // for (const [key, val] of params.entries()) {
//             //     bodyObject[key] = val;
//             // }
//             const bodyObject = Object.fromEntries(params)
//             console.log(bodyObject);
//             fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
//         })
        
//         res.statusCode = 302;
//         res.setHeader('Location', '/');
//     }
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Complete Coding</title></head');
//     res.write('<body><h1>Like/Share/Subscribe</h1></body>');
//     res.write('</html>');
//     res.end();
// })


// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server running on address http://localhost:${PORT}`)
// });
