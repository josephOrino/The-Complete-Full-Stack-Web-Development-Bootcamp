import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>This is my homepage.</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>You can contact me here.</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>This is all about me.</h1>");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});