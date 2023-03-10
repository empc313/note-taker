//Required
const fs = require("fs");
const termData = require("./db/db.json");
const express = require("express");

const PORT = 3001;

const app = express();

//middle
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/notes', (req, res) => res.json(noteText));

//PORT listening to server
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});



module.exports = app