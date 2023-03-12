//Required;
const fs = require("fs");
const router = require("express").Router();
const path = require("path");


//GET request
router.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', "utf8", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data))
    res.send(data);
  });
});

//POST
router.post('api/notes/', (req, res) => {
  const newNote = {
    title: req.body.title,
    text: req.body.text
  }
  fs.readFile('./db/db.json', (err,data) => {
    if(err) throw err;
    const newText = JSON.parse(data);
    newText.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(newText), (err) => {
      if (err) throw err;
        res.send(newText);
      })
  });
});



// //DELETE

module.exports = router;
