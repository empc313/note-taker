//Required
const fs = require("fs");
const express = require("express");
const routes = require('./public/assets/js/routes');
const app = express();

const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/api', routes);

//PORT listening to server
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});


module.exports = app