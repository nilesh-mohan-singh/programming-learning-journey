console.log("KG Cding is the best.");

const fs = require('fs');
fs.writeFile("output.txt", "Writing file", (err) => {
    if (err) console.log("Error occured");
    else console.log('File Written Successfully');
});
