import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

const stories = [
    {
      title: "The Lost City",
      author: "Sarah Johnson",
      story: "In the heart of the Amazon rainforest, an ancient city emerges from the mist, hiding secrets of a lost civilization."
    },
    {
      title: "Midnight Train",
      author: "James Monroe",
      story: "On a stormy night, passengers aboard a mysterious train realize they are traveling not through space but through time itself."
    },
    {
      title: "Echoes of War",
      author: "Emily Chang",
      story: "In a war-torn country, two childhood friends find themselves on opposite sides of a conflict that threatens to destroy everything they hold dear."
    },
    {
      title: "The Forgotten Key",
      author: "Michael Roberts",
      story: "A young archaeologist discovers an ancient key that unlocks not just hidden chambers but also the truth about his own family's past."
    },
    {
      title: "Whispers in the Dark",
      author: "Rebecca Taylor",
      story: "Strange whispers lead a curious teenager into a labyrinth of underground tunnels where she uncovers a community of people who have lived hidden from the world for centuries."
    }
  ];

app.get('/', (req, res) => {
    res.render('index.ejs', {stories: stories});
})

app.post('/add', (req, res) => {
    stories.push({
        title: req.body.title,
        author: req.body.author,
        story: req.body.story
      })
    res.render('index.ejs', {stories: stories});
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})