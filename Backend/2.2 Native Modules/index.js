const fs = require('fs');

// fs.writeFile("message.txt", "Hello from nodeJs", (err) => {
//     if (err) throw error;
//     console.log("The file has been saved!");
// });

const contents = fs.readFile("message.txt", 'utf8', (err, data) => {
    if (err) throw error;
    console.log(data);
});
console.log(contents);