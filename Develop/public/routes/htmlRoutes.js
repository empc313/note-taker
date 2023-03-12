const router = require("express").Router();
const path = require("path");

//GET notes html
router.get('api/notes/', (req, res) => {
  res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
});
//GET index html
router.get('api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});

module.exports = router;