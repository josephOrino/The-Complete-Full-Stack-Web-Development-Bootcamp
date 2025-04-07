import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var statement = "";

function getDay(){
    var today = new Date().getDay();
    if (today === 0 || today === 6) {
        statement = "Hey! It's the weekend, it's time to have fun!";
    } else {
        statement = "Hey! It's a weekday, it's time to work hard!";
    }
}

getDay();



app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs", {
            statement: statement
        }
    );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
