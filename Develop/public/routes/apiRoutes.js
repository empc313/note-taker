//Required
const fs = require("fs");
const router = require("express").Router();

//GET request
router.get("api/notes", (req, res) => {
  fs.readFileSync("./db/db.json", "utf8", (err, data) => {
    res.json(JSON.parse(data));
  });
});

// //
// // //POST
// // app.post("/api/notes", (req, res)=> {
// // readFile("db.json", "utf8")
// // const newNote = req.body;
// // });
// // res.json(data)

// //DELETE

module.exports = router;
