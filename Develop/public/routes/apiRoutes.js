//Required
const fs = require("fs");
const app = require("express");
const db = require('./db/db.json');
module.exports = function(app) {

//GET request
app.get('api/notes', (req, res) => {
  fs.readFileSync("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
    res.send(data)
  });
});
}
// 
// //POST
// app.post("/api/notes", (req, res)=> {
// readFile("db.json", "utf8")
// const newNote = req.body;
// });
// res.json(data)

//DELETE