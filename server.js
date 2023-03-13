//Required
const express = require("express");
const path = require("path");

//Require routes
const apiRoute = require("./routes/apiRoutes");
const htmlRoute = require("./routes/htmlRoutes");

//express
const app = express();

//PORT
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Routes
app.use('/api/notes', apiRoute);
app.use(htmlRoute);


app.use(express.static('public'));
//PORT listening to server
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

module.exports = app;