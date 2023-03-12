Required;
const fs = require("fs");
const router = require("express").Router();
const db = require("./Develop/db/db.json");
const path = require("path");

//GET request
router.get("/api/notes", (req, res) => {
  fs.readFileSync("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// POST
// router.post('/api/notes', (req, res) => {
//   fs.readFile("./db/db.json", "utf8", (err, data) => {
//     if (err) throw err;
//     const getNote = JSON.parse(data);
//     getNote.push(req.body);
//     fs.writeFile("./db.db.json", JSON.stringify(getNote), (err) => {
//       if (err) return err;
//       console.log('yay');
//     })
//   })
// });

// //DELETE

module.exports = router;
